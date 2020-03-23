import convert from 'xml-js';
import {bestTemperature as bt} from '../Constants/Constants.js';
import {historyDays as hd}  from '../Constants/Constants.js';
import {getShortDate, getDateStringWithDayName} from '../Helpers/DateHelper.js';
import regression from 'regression';

const bestTemperature = bt;
const historyDays = hd;

export const INIT_FETCHING_STATUS = "INIT_FETCHING_STATUS";

export const initFetchingStatus = () => ({
    type: "INIT_FETCHING_STATUS"
});

export const FETCH_FORECAST_SUCCESS = "FETCH_FORECAST_SUCCESS";

export const forecastFetchedSuccess = (data) => ({
    type: "FETCH_FORECAST_SUCCESS",
    data: data
});


export const FETCH_HISTORY_SUCCESS = "FETCH_HISTORY_SUCCESS";

export const historyFetchedSuccess = (data, station) => ({
    type: "FETCH_HISTORY_SUCCESS",
    data: data,
    station: station
});

export const FETCH_FORECAST = "FETCH_FORECAST";

export const forecastFetched = () => ({
    type: "FETCH_FORECAST",
});


export const FETCH_HISTORY = "FETCH_HISTORY";

export const historyFetched = () => ({
    type: "FETCH_HISTORY",
});


export const RESULT_CALCULATED = "RESULT_CALCULATED";

export const resultCalculated = (result) => ({
    type: "RESULT_CALCULATED",
    result: result,
});

export const fetchForecast = (lon, lat) => (dispatch) => {
    if(lon === null && lat === null)
        return;
    fetch(`https://api.met.no/weatherapi/locationforecast/1.9/?lat=${lat}&lon=${lon}`)
        .then(response => response.text())
        .then(res => convert.xml2json(res, { compact: true, spaces: 4 }))
        .then(res => JSON.parse(res))
        .then(json => json.weatherdata.product.time)
        .then(data => data.map(it => ({ data: it, fromDate: new Date(it._attributes.from), toDate: new Date(it._attributes.to) })))
        .then(arr => {
            let raw = arr.filter(it => it.fromDate.getTime() == it.toDate.getTime());
            let data = {};
            data.values = [];

            for (let i = 0; i < raw.length; i++) {
                let available = data.values.filter(x=>x.date == getShortDate(raw[i].fromDate))[0];
                if(available == null){
                data.values.push(
                    {
                        date: getShortDate(raw[i].fromDate),
                        max: raw[i].data.location.temperature._attributes.value,
                        min: raw[i].data.location.temperature._attributes.value,
                        morningMes: raw[i].fromDate.getHours() > 9 && raw[i].fromDate.getHours() < 16,
                        eveningMes: raw[i].fromDate.getHours() > 22 || raw[i].fromDate.getHours () < 6
                    }
                );}
                else{
                    available.max = Math.max(available.max,raw[i].data.location.temperature._attributes.value);
                    available.min = Math.min(available.min,raw[i].data.location.temperature._attributes.value);
                    available.points++;
                    available.morningMes= (raw[i].fromDate.getHours() > 9 && raw[i].fromDate.getHours() < 16) ||   available.morningMes;
                    available.eveningMes= (raw[i].fromDate.getHours() > 22 || raw[i].fromDate.getHours() < 6) ||  available.eveningMes;
                }

                
            }
            data.values = data.values.filter(x=>x.morningMes && x.morningMes)
            data.minValue = Math.min(...data.values.map(x => (Math.min(x.min, bestTemperature))));
            data.maxValue = Math.max(...data.values.map(x => (Math.max(x.max, bestTemperature))));
            data.ticks = [bestTemperature]
            for (let i = Math.floor(data.minValue); i <= Math.floor(data.maxValue); i++) {
                if (i % 5 == 0) data.ticks.push(i);
            }
            data.ticks.sort((a, b) => a - b);
            data.values.forEach(x => {x.date = getDateStringWithDayName(x.date);});
            return data
        }
        )
        .then(json => {dispatch(forecastFetchedSuccess(json))})
        .catch(erorr => dispatch(forecastFetched()))
        
};

export const fetchHistory= (lon, lat) => (dispatch) => {

    if(lon === null && lat === null)
        return;

    fetch(`https://us-central1-kiedyzmienicopony.cloudfunctions.net/app/history?key=${process.env.FIRESTORE_API_KEY}&lon=${lon}&lat=${lat}&number=${historyDays}`)
        .then(response => response.json())

        .then(x => 
            {
                x.data.forEach(x=>x.date = getDateStringWithDayName(x.date));
                let result = {};
                result.station = x.station;
                result.values = x.data;
                result.minValue = Math.min(...result.values.map(x => (Math.min(x.min, bestTemperature))));
                result.maxValue = Math.max(...result.values.map(x => (Math.max(x.max, bestTemperature))));
                result.ticks = [bestTemperature]
                for (let i = Math.floor(result.minValue); i <= Math.floor(result.maxValue); i++) {
                    if (i % 5 == 0) result.ticks.push(i);
                }
                result.ticks.sort((a, b) => a - b);
                return result; 
            })
        .then(json => {dispatch(historyFetchedSuccess(json, json.station))})
        .catch(error=>dispatch(historyFetched()))
}

export const calculateResult = (isDataFethed, isHistoricalDataFetched ,data,historicalData, drivingRoutine ) => (dispatch) =>
{
    let result = {};
    result.error = "";

    if(isDataFethed && data == null) {result.error = "Dane historyczne niedostępne."; dispatch(resultCalculated(result)); return;}
    if(isHistoricalDataFetched && historicalData == null) {result.error = "Prognoza niedostępna."; dispatch(resultCalculated(result)); return;}

    //takeDataDependingOnDrivingRoutine
    let historicalTemp =[];
    let forecastTemp = [];

    if(drivingRoutine === "normal"){
        historicalTemp = historicalData.values.map(x=>(x.min + x.max)/2);
        forecastTemp = data.values.map(x=>(x.min + x.max)/2);
        result.reference = "avg";
    }
    else if(drivingRoutine === "day"){
        historicalTemp = historicalData.values.map(x=>x.max);
        forecastTemp = data.values.map(x=>x.max);
        result.reference = "max";
    }
    else if(drivingRoutine === "night"){
        historicalTemp = historicalData.values.map(x=>x.min);
        forecastTemp = data.values.map(x=>x.min);
        result.reference = "min";
    }


    result.avgHistorical = historicalTemp.reduce((previous, current) => current += previous) / historicalTemp.length;
    result.avgForecast = forecastTemp.reduce((previous, current) => current += previous) / forecastTemp.length;
    let concat = historicalTemp.concat(forecastTemp);
    result.avg = concat.reduce((previous, current) => current += previous) / concat.length;

    result.trendHistorical = getTrend(historicalTemp);
    result.trendForecast = getTrend(forecastTemp);
    result.trend = getTrend(concat);

    result.minForecast = Math.min(...forecastTemp);
    result.maxForecast = Math.max(...forecastTemp);
    result.minHistory= Math.min(...historicalTemp);
    result.maxHistory = Math.max(...historicalTemp);
    result.min = Math.min(...concat);
    result.max = Math.max(...concat);

    let factor = result.trend < 0 ? -1.5 : 0;

    result.avg + factor > bestTemperature ?  result.type = "summer" : result.type = "winter"

    dispatch(resultCalculated(result));
}

const getTrend = (array) => {
    let matrix = [];
    for(let i =0 ; i<array.length; i++){
        matrix.push([i, array[i]])
    }
    let result = regression.linear(matrix);
    return result.equation[0];
}