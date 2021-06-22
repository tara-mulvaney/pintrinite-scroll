import React from 'react';
import logo from './logo.svg';
import './App.css';
import PinData from './PinData.json';
import PinImage from './components/PinImage/PinImage.jsx';


class App extends React.Component {
  render() {
    return (
      <>
        <div>
          {PinData.map(pin => {
            return (
              <div className="pin">
                <PinImage/>
              </div>
            )
          }) }
        </div>
      </>
      )
  }

}

export default App;
