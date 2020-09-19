import { combineReducers } from 'redux';
import TripReducer  from '../Redux/TripSummary/TripReducer';

const rootReducer = combineReducers({
    data : TripReducer,
})


export default rootReducer