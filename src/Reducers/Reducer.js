import { combineReducers } from 'redux'
import { SELECT_LOCATION, SELECT_DRIVING_ROUTINE } from '../Actions/SelectAction';
import { FETCH_FORECAST_SUCCESS, FETCH_HISTORY_SUCCESS, RESULT_CALCULATED } from '../Actions/GraphActions';

const initialState = {
    lon: null,
    lat: null,
    data: {},
    isDataAvailable: false,
    historicalData: {},
    isHistoricalDataAvailable: false,
    historicalDataStation: "",
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
                isDataAvailable: true
            };
        case FETCH_HISTORY_SUCCESS:
            return {
                ...state,
                historicalData: action.data,
                isHistoricalDataAvailable: true,
                historicalDataStation: action.station
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
            }
        default: return state
    }
};

const appReducer = combineReducers({
    selectReducer
});

export default appReducer;