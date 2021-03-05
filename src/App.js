import React, { Component } from 'react'; 
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imageLinkForm/imagelinkform';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>        
        <Logo />
        <ImageLinkForm />
        {/* 
          <FacRecongnition />*/}
      
    </div>
    );
  }
}

export default App;
