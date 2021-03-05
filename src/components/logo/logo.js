import React from 'react';
//import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';

//simple copmonent with no state so just need a simple function

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt>
            <div style={{ height: '300px', backgroundColor: 'darkgreen' }}>
                <h1>React Parallax Tilt 👀</h1>
            </div>
            </Tilt>

        </div >
    );
}
export default Logo;