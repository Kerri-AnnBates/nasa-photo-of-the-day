import React from 'react';
import Title from './Title';
import Image from './Image';
import Date from './Date';
import Explanation from './Explanation';
import { Card, CardBody, Row, Col } from 'reactstrap';

function Cards(props) {
    return (
        <Row>
            <Date imageDate={props.data.date} selectedDate={props.selectDate} />
            <Card>
                <Title photoTitle={props.data.title} />
                <CardBody>
                    <Image imageSrc={props.data.hdurl} mediaType={props.data.media_type} videoSrc={props.data.url} />
                    <Explanation imageExp={props.data.explanation} />
                </CardBody>
            </Card>
        </Row>
    )
}

export default Cards;