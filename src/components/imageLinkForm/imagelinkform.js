import React from 'react';
import './imagelinkform.css';


//simple copmonent with no state so just need a simple function

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div >
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try!'}
            </p>
            <div className="center">
            <div className= " form center pa4 br3 shadow-5" >
                <input className='f4 pa2 w-80 center' type='text' onChange={onInputChange} />
                <button 
                className= 'ma1 w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                onClick= {onButtonSubmit}
                >Detect</button>
            </div>
            </div>
            

        </div >
    );
}
export default ImageLinkForm;

//Tachyons classNames
//f size 4
//pa padding
//w 70% 
//ma margin
//br border radius