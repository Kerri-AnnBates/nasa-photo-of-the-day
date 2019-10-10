import React from 'react';
import { CardTitle, CardHeader } from 'reactstrap';

function Title(props) {
    return (
        <CardHeader>{props.photoTitle}</CardHeader>
    )
}

export default Title;