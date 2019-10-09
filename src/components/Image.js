import React from 'react';

function Image(props) {
    return (
        <div className='image-container'>
            < img src={props.imageSrc} alt = 'image details' / >
        </div>
    )
}

export default Image;