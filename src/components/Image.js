import React from 'react';
import { CardImg } from 'reactstrap';
function Image(props) {
    return (
        <div className='image-container'>
            {
                // if (props.mediaType === 'video') {
                //     <iframe width="560" height="315" src={props.videoSrc} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                // }
            }

            <CardImg src={props.imageSrc} alt = 'image details'/>
        </div>
    )
}

export default Image;