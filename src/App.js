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
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 4,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 500,
      },
      value: 80,
    },
    opacity: {
      value: 0.6,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 1,
    },
  },
  detectRetina: true,
}


class App extends Component {
  constructor(props) {
    super(props);

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
          params = {particleOptions}
        />

        <Rank />
        <ImageLinkForm />

        {/* 
          <FacRecongnition />*/}

      </div>
    );
  }
}

export default App;
