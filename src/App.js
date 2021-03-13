import React, { Component } from 'react';
import Particles from "react-tsparticles";
import Clarifai from 'clarifai';
import Navigation from './components/navigation/navigation';
import SignIn from './components/signin/signin';
import Register from './components/register/register';
import FaceRecongnition from './components/facerecognition/facerecognition';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imageLinkForm/imagelinkform';
import Rank from './components/rank/rank';
import './App.css';



const app = new Clarifai.App({
  apiKey: '9e5edc8105a84b0d9758712497600bfe'
});

const particleOptions = {
  /*background: {
    color: {
      value: "#0d47a1",
    },
  },*/
  backgroundMode: {
    enable: true
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 100,
        duration: 2,
        opacity: 0.2,
        size: 40,
      },
      push: {
        quantity: 1,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: ["#f67e7d", "#843b62", "#621940"]
    },
    links: {
      color: "#ffb997",
      enable: true
    },
    move: {
      enable: true,
      speed: 6
    },
    size: {
      value: 0,
      random: {
        enable: true,
        minimumValue: 1
      },
      animation: {
        enable: true,
        speed: 2.5,
        minimumValue: 1
      }
    },
    opacity: {
      value: 0.8,
      random: {
        enable: true,
        minimumValue: 0.4
      }
    }
  }
}


class App extends Component {
  //this is for the react tsparticles (props), 
  //input - usere input
  //
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',  // keeps track of where we are on th page- start on signin whn app loads
    }

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    console.log(container);
  }

  //setting up state for the input box functionality
  //constructor() {
  //super();

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;  //bounding box is a percentage of the image
    const image = document.getElementById('inputImage');
    const width = Number(image.width);          //remember set to 500px in js
    const height = Number(image.height);
    console.log(width, height);
    //return the object that is going to fill out the box state - 4 points
    return {
      leftCol: clarifaiFace.left_col * width,  //left _col property is a percentage of the width
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }

  displayFaceBox = (box) => {
    console.log(box);       //console.log box object make sure it's working
    this.setState({ box: box });
  }

  //collects input from user
  onInputChange = (events) => {
    this.setState({ input: events.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)             //do not put this.state.imageURL ( wont work-hard to debug- becuase of the way setState works)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      //console.log(response.outputs[0].data.regions[0].region_info.bounding_box);  //calling the info from the (response) in the console- return of data in console
      .catch(err => console.log(err));
  }

  onRouteChange= (route) => {
    this.setState({route: route});

  }

  // HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
  // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
  // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
  // If that isn't working, then that means you will have to wait until their servers are back up. Another solution
  // is to use a different version of their model that works like: `c0c0ac362b03416da06ab3fa36fb58e3`
  // so you would change from:
  // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
  // to:
  //.predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)
  //Clarifai.COLOR_MODEL,
  //change model GENERAL_MODEL COLOR_MODEL (Other models-https://www.clarifai.com/developers/model-gallery) 
  //above pics the model you wnat to use 

  /*(response => {
    console.log('hi', response)
    if (response) {
      fetch('http://localhost:3000/image', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: this.state.user.id
        })
      })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, { entries: count }))
        })
  
    }
    this.displayFaceBox(this.calculateFaceLocation(response))
  })
  .catch(err => console.log(err));
  }*/

  render() {
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} />
        <Particles
          className='particles'
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          params={particleOptions}
        />
        <Logo />    
        { this.state.route === 'home'
          ? <div> 
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit} />
            <FaceRecongnition box={this.state.box} imageUrl={this.state.imageUrl} />
          </div>  // to do conditional statement need to wrap in {JS} and insert <div>
          :(
            this.state.route === 'signin'
            ?<SignIn onRouteChange ={this.onRouteChange}/>
            :<Register onRouteChange ={this.onRouteChange}/>
          )
          
        }
      </div>

    );
  }
}

export default App;
