import React from 'react';
import { CardSubtitle, Input } from 'reactstrap';
import styled from 'styled-components';

const DateDiv = styled.div`
    text-align: center;
    margin: 20px auto;
    color: #e8e8e8;
`;

function Date(props) {

    return (
        <DateDiv>
            <CardSubtitle>Date taken: {props.imageDate}</CardSubtitle>
            
            <div className="date-select">
                Select a date: <Input type="date" id="date-picker" onChange={(e) => props.selectedDate(e.target.value)} />
            </div>
        </DateDiv>
    )
}

export default Date;