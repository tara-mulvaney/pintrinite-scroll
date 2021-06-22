import React from 'react';
import PinData from '../../PinData.json';
import './PinImage.css';

class PinImage extends React.Component {
  render() {
    return (
      <>
        <div>
          {PinData.map(pin => {
            return (
              <div className="wrapper">
                <img src ={pin.images.orig.url}/>
              </div>
            )
          }) }
        </div>
      </>
      )
  }
}

export default PinImage
