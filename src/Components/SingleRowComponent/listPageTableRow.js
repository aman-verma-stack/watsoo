import React  from 'react';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function TripDetails(data) {
    return (
        <tr>
            <td className='list_data'></td>
            <td className='list_data'>
                {data.data.startPointNode} ({moment(parseInt(data.data.startTripDate)).format('LT')} )&nbsp;
                <FontAwesomeIcon className='text_skyblue' icon={faLongArrowAltRight} />&nbsp;
                {data.data.endPointNode}({moment(parseInt(data.data.endTripDate)).format('LT')})
            </td>
            <td className='list_data'>{data.data.driverName}</td>
            <td className='list_data'>RS. 0 
                <span className='info_circle'><FontAwesomeIcon className='text_skyblue' icon={faInfoCircle} /></span></td>
            <td className='list_data'>{data.data.totalKm} Km</td>
            <td className='list_data'>{data.data.gpsDistance} Km</td>
            <td className='list_data'>
                { moment(parseInt(data.data.endTripDate)).diff(parseInt(data.data.startTripDate), 'hours') + ' hrs'} 
                </td>
            <td className='list_data'>{data.data.startODOMeter? data.data.startODOMeter : 'N/A'} <FontAwesomeIcon icon={faLongArrowAltRight} /> {data.data.endODOMeter? data.data.endODOMeter : 'N/A'}</td>
            <td className='list_data'>
                <Button className='custom_button'>Movement Report</Button>
                <Button className='custom_button'>Stoppage Report</Button></td>
        </tr>
    )
}


export default TripDetails;