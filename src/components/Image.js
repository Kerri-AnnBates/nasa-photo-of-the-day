import React from 'react';
import { CardImg } from 'reactstrap';
import styled from 'styled-components'

function Image(props) {

    // Display video if media type is video
    if (props.mediaType === 'video') {
        return (
            <div className = 'image-container' >
                <iframe width="100%" height="315" src={props.videoSrc} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe> 
            </div>
        )
    }
    
    // Display image otherwise
    return (
        <div className='image-container'>
            <CardImg className="img-fluid" src={props.imageSrc} alt = 'image details'/>
        </div>
    )
}

export default Image;