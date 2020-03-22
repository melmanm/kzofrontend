import { combineReducers } from 'redux'
import { SELECT_LOCATION, SELECT_DRIVING_ROUTINE } from '../Actions/SelectAction';
import { FETCH_FORECAST_SUCCESS, FETCH_HISTORY_SUCCESS, RESULT_CALCULATED, INIT_FETCHING_STATUS, FETCH_HISTORY, FETCH_FORECAST } from '../Actions/GraphActions';

const initialState = {
    lon: null,
    lat: null,
    data: null,
    historicalData: null,
    historicalDataStation: "",
    isDataFetched: false,
    isHistoricalDataFetched: false,
    drivingRoutine: "normal",
    city: null,
    result: null
}

function selectReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_LOCATION:
            return {
                ...state,
                lon: action.lon,
                lat: action.lat,
                city: action.city
            };
        case FETCH_FORECAST_SUCCESS:
            return {
                ...state,
                data: action.data,
                isDataFetched: true
            };
        case FETCH_HISTORY_SUCCESS:
            return {
                ...state,
                historicalData: action.data,
                historicalDataStation: action.station,
                isHistoricalDataFetched: true,
            };
        case SELECT_DRIVING_ROUTINE:
            return {
                ...state,
                drivingRoutine: action.drivingRoutine
            };
        case RESULT_CALCULATED:
            return {
                ...state,
                result: action.result
            };
        case INIT_FETCHING_STATUS:
            return {
                ...state,
                isDataFetched: false,
                isHistoricalDataFetched: false,
                data: null,
                historicalData: null,
            };
        case FETCH_HISTORY:
            return {
                ...state,
                isHistoricalDataFetched: true
            };
        case FETCH_FORECAST:
            return {
                ...state,
                isDataFetched: true
            };
        default: return state
    }
};

const appReducer = combineReducers({
    selectReducer
});

export default appReducer;