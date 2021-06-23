import React from 'react';
import logo from './logo.svg';
import './App.css';
import PinData from './PinData.json';
import PinImage from './components/PinImage/PinImage.jsx';
import PinList from './components/PinList/PinList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: PinData.images,
      hearts: [],
      current: {}
    };
  this.handleDetailsClick = this.handleDetailsClick.bind(this);
  this.handleHeartToggle = this.handleHeartToggle.bind(this);
  }

handleDetailsClick(pin){
 const myPinData = PinData.map(pin => {
   return (
     <div className="pin">
       <PinImage
         url={pin.images.orig.url}/>
     </div>
   )
 })

 fetch(pin)
   .then(response => response.json())
   .then(data => this.setState({current: data}))
}

handleHeartToggle(pin) {
    console.log('** calling handleHeartToggle **')
    console.log('selected pin', pin)
    // const { hearts } = this.state;

    //make copy of current this.state.hearts array

    const newHearts = this.state.hearts.slice();

    //find the index of the film in our this.state.hearts array (if it exists)
    const pinIndex = this.state.faves.indexOf(pin);
    if(pinIndex >= 0) {
      //it exists in the this.state.hearts array, now remove it
      newHearts.splice(pinIndex, 1);
    } else {
      //it does not exist, add it
      newHearts.push(pin);
    }
    //updating state
    this.setState(prevState => ({
      //update this.state.current to pin that was clicked
      hearts: newHearts
    }))
    console.log('state',this.state)
  }
  render() {
    const { pins, hearts, current } = this.state;

    return (
        <div>
        <div className="pin-library">
        <PinList
          pins={pins}
          hearts={hearts}
          onHeartToggle={this.handleHeartToggle}
          onDetailsClick={this.handleDetailsClick}
          />


      </div>
      </div>
      )
  }

}

export default App;
