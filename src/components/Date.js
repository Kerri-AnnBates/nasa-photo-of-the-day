import React from 'react';

function Date(props) {
    let date;
    return (
        <div  className='date-container'>
            <p>Date taken:</p>
            <div className='date'>
                <p>{props.imageDate}</p>
            </div>
            <div className="date-select">
                Select a date: <input type="date" id="date-picker" onChange={(e) => props.selectedDate(e.target.value)} />
            </div>
        </div>
    )
}

export default Date;