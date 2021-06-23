import React, { Component } from 'react';
import PinRow from '../PinRow/PinRow.jsx'
import PinData from '../../PinData.json';
import './PinList.css';


class PinList extends Component {
  state = {
    filter: 'all'
  }
  handleFilterClick(filter) {
    this.setState(prevState => ({
      filter: filter
    }))
  }
  //attempted to import InfiniteScroll in this component but have been unable to make the elements render with this method.
  //The required attributes for this package, such as hasMore and setPage, return an error of not defined.
  render() {
    const {pins, hearts, onHeartToggle, onDetailsClick} = this.props;

    const filterList = this.state.filter === 'all' ? pins : hearts;

    const allPins = PinData.map(pin => {
    const hasAHeart = hearts.includes(pin)

    return <PinRow
      pin={pin}
      hasAHeart={hasAHeart}
      onHeartToggle={onHeartToggle}
      onDetailsClick={onDetailsClick}
      />
    })
    return (
      <div className="pin-list">
        <h1 className="section-title"> Pintrinite Scroll for the Kittehs </h1>
          <div className="pin-list-filters">
            <div
              className={`pin-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}
              onClick={() => this.handleFilterClick('all')}
            >

            </div>
          </div>
        {allPins}
      </div>
    )
  }
}

export default PinList;
