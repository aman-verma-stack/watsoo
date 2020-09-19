import axios from 'axios'
import { fetchTripRequest, fetchTripSuccess, fetchTripFaliure } from '../../Redux/TripSummary/TripActions'


export const fetchTripAPI = (searchParams) => {
    let url = 'http://staging.watsoo.com:8080/watsoo-amazon-api//trip-controller-web/v1/vehicle/wise/summary/36'

    const config = {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        }
    };

    return (dispatch) => {
        dispatch(fetchTripRequest)
        axios.post(url, searchParams, config)
            .then(response => {
                const data = response.data
                dispatch(fetchTripSuccess(data))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchTripFaliure(errorMsg))
            })
    }
}