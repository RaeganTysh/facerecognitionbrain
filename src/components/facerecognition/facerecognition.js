import React from 'react';

//simple comonent with no state so just need a simple function

const FaceRecognition = ({imageUrl}) => {
    return (
        <div className='center'>
            <img alt= "" src={imageUrl} />

        </div>
    );
}
export default FaceRecognition;