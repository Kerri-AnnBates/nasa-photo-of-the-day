import React from 'react';
import { CardTitle, CardHeader } from 'reactstrap';
import styled from 'styled-components';


function Title(props) {
    return (
        <CardHeader>{props.photoTitle}</CardHeader>
    )
}

export default Title;