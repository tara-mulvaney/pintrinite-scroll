import React, { Component } from 'react';
import PinImage from '../PinImage/PinImage.jsx'
import Heart from '../Heart/Heart.jsx';
import './PinRow.css'


class PinRow extends Component {

  render() {
    const { pin, hasAHeart, onHeartToggle, onDetailsClick } = this.props;

    return (
        <div
          className="pin-row"
          onClick={() => onDetailsClick(pin)}
        >


        <div className="pin-summary">
        <PinImage
          url={pin.images.orig.url}/>
          <a href={`https://pinterest.com${pin.board.url}`}>
          <h1>{pin.board.name}</h1>
          </a>
          <p>{pin.description}</p>
        </div>
        <Heart
          hasAHeart={hasAHeart}
          onHeartToggle={() => onHeartToggle(pin)}
        />
      </div>
    )
  }
}

export default PinRow
