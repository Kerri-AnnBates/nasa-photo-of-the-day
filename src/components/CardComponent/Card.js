import React from 'react';
import Title from '../TitleComponent/Title';
import Image from '../ImageComponent/Image';
import Date from '../DateComponent/Date';

function Card() {
    return (
        <div className="card">
            <Title />
            <Image />
            <Date />
        </div>
    )
}

export default Card;