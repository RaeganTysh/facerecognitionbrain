import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imageLinkForm/imagelinkform';
import Rank from './components/rank/rank';
import './App.css';
import Particles from "react-tsparticles";

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
      value: 4,
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
  constructor(props) {
    super(props);
    this.state = {
      input: '',
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



  //collects input form user
  onInputChange = (events) => {
    console.log(events.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
  }


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
      {/*<FaceRecongnition />*/}

    </div>
  );
}
}

export default App;
