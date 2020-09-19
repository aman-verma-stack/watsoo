import { FETCH_TRIP_REQUEST, FETCH_TRIP_SUCCESS, FETCH_TRIP_FALIURE } from './TripTypes';

const initialState = {
    loading: true,
    trip: [],
    error: '',
}

const Reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_TRIP_REQUEST : return{
            ...state,
            loading: true
        }
        case FETCH_TRIP_SUCCESS : return{
            loading: false,
            trip: action.payload,
            error: ''
        }
        case FETCH_TRIP_FALIURE : return{
            loading: false,
            trip: [],
            error: action.payload
        }
        default: return state
    }
}

export default Reducer;