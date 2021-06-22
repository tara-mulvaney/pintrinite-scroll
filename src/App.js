import React from 'react';
import logo from './logo.svg';
import './App.css';
import PinData from './PinData.json';

function App() {
  return (
    <div className="App">
      <div className="pins">
        {PinData.map(pin => {
          return (
            <>
              <h4>{pin.name}</h4>
              <p>{pin.description}</p>
            </>
          )
        }) }
      </div>
    </div>
  );
}

export default App;
