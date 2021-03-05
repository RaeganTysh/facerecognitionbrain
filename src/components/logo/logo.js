import React from 'react';
//import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import './logo.css';

//simple copmonent with no state so just need a simple function

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="parallax-effect" perspective={500}>
            <div class= "tilt">
            <a href="https://www.freeiconspng.com/img/2549" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/brain-png-31.png" width="100" alt="brain png" /></a>
                <h1> Face Recongnition App </h1>
            </div>
            </Tilt>

        </div >
    );
}
export default Logo;

//backgroundColor: '##0066ff'
//👽 👽

//style={{ height: '100px'}}