import React from 'react';
import Title from './Title';
import Image from './Image';
import Date from './Date';
import Explanation from './Explanation';

function Card(props) {
    return (
        <div className="card">
            <Date imageDate={props.data.date} selectTheDate={props.selectDate} />
            <Title photoTitle={props.data.title} />
            <div className="content">
                <Image imageSrc={props.data.hdurl} />
                <Explanation imageExp={props.data.explanation} />
            </div>
        </div>
    )
}

export default Card;