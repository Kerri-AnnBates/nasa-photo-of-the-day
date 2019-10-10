import React from 'react';
import { CardTitle } from 'reactstrap';

function Title(props) {
    return (
        <CardTitle>{props.photoTitle}</CardTitle>
    )
}

export default Title;