import React from 'react';

function Date(props) {
    return (
        <div  className='date-container'>
            <p>Date taken:</p>
            <div className='date'>
                <p>{props.imageDate}</p>
            </div>
            <div className="date-select">
                Select a date: <input type="date" id="date-picker" onChange={() => props.selectTheDate()} />
            </div>
        </div>
    )
}

export default Date;