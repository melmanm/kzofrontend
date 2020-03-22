export const SELECT_LOCATION = "SELECT_LOCATION";

export function SelectLocation(city){
    return  {
        type: SELECT_LOCATION,
        lon: city.lon,
        lat: city.lat,
        city: city
    }
}

export const SELECT_DRIVING_ROUTINE = "SELECT_DRIVING_ROUTINE";

export function SelectDrivingTime(option){
    return  {
        type: SELECT_DRIVING_ROUTINE,
        drivingRoutine: option
    }
}