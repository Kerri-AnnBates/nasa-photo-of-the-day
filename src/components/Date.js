import React from 'react';
import { CardSubtitle } from 'reactstrap';

function Date(props) {

    return (
        <div className='date-container'>
            <CardSubtitle>Date taken: {props.imageDate}</CardSubtitle>
            
            <div className="date-select">
                Select a date: <input type="date" id="date-picker" onChange={(e) => props.selectedDate(e.target.value)} />
            </div>
        </div>
    )
}

export default Date;