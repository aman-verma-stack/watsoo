import React from 'react';

function TripHeader() {
    return (
        <tr>
            <th className='table_head' >#</th>
            <th className='table_head'>Trip Start(Node) to Trip Ends(Node)</th>
            <th className='table_head'>Driver Name</th>
            <th className='table_head'>Trip Expenses</th>
            <th className='table_head'>Trip Km</th>
            <th className='table_head'>Trip GPS Km</th>
            <th className='table_head'>Trip Time</th>
            <th className='table_head'>Odometer Reading</th>
            <th className='table_head'>Action</th>
        </tr>
    )
}


export default TripHeader;