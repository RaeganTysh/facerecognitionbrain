import React, { Component } from 'react';
import Particles from "react-tsparticles";
import Clarifai from 'clarifai';
import Navigation from './components/navigation/navigation';
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



  //collects input from user
  onInputChange = (events) => {
    this.setState({ input: events.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(
        // HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
        // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
        // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
        // If that isn't working, then that means you will have to wait until their servers are back up. Another solution
        // is to use a different version of their model that works like: `c0c0ac362b03416da06ab3fa36fb58e3`
        // so you would change from:
        // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        // to:
        //.predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)
        Clarifai.COLOR_MODEL,
        //Clarifai.FACE_DETECT_MODEL,
        //above pics the model you wnat to use 
        this.state.input)  //do not put this.state.imageURL ( wont work-hard to debug)
      .then(
        function (response) {
          console.log(response);
        },
        function (err) {
          //there was an error

        }
      );
  }


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
        <Navigation />
        <Logo />
        <Particles
          className='particles'
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          params={particleOptions}
        />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit} />
        <FaceRecongnition imageUrl={this.state.imageUrl} />

      </div>
    );
  }
}

export default App;
