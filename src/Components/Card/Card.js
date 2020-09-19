import React from 'react';

export const Card = (props) => {
    return(
        <div className='trip_details_container'>
            {props.children}
        </div>
    )
}


export const CardHeader = (props) => {
    return (
        <div className='list_heading_wrapper'>
            {props.children}
        </div>
    )
}

export const CardBody = (props) => {
    return (
        <div className='inside_trip_container'>
            <div className='trip_details_wrapper'>
                {props.children}
            </div>
        </div>
    )
}