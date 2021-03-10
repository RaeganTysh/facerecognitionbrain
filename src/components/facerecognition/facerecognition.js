import React from 'react';

//simple comonent with no state so just need a simple function

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id= "inputImage" src={imageUrl} width='500px' height="auto" alt="randomface" />
            </div>

        </div>
    );
}
export default FaceRecognition;

//tachyons styling
//ma 
//mt margin top