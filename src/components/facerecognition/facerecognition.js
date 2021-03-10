import React from 'react';
import './facerecognition.css';

//simple comonent with no state so just need a simple function

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id= "inputImage" src={imageUrl} width='500px' height="auto" alt="randomface" />
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div> 
            </div>

        </div>
    );
}
export default FaceRecognition;

//tachyons styling
//ma 
//mt margin top