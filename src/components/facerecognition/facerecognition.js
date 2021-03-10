import React from 'react';

//simple comonent with no state so just need a simple function

const FaceRecognition = ({imageUrl}) => {
    return (
        <div className='center ma'>  
            <div className= 'absolute mt2'>
            <img alt= "" src={imageUrl} width='500px' height="auto" />
            </div>

        </div>
    );
}
export default FaceRecognition;

//tachyons styling
//ma 
//mt margin top