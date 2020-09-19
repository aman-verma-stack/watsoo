import { FETCH_TRIP_REQUEST, FETCH_TRIP_SUCCESS, FETCH_TRIP_FALIURE } from './TripTypes';

export const fetchTripRequest = () => {
    return {
        type: FETCH_TRIP_REQUEST
    }
}

export const fetchTripSuccess = data => {
    return {
        type: FETCH_TRIP_SUCCESS,
        payload: data
    }
}

export const fetchTripFaliure = error => {
    return {
        type: FETCH_TRIP_FALIURE,
        payload: error
    }
}