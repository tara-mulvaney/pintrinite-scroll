import React, { Component } from 'react';
import {HeartTwoTone} from '@ant-design/icons';
import './Heart.css';

class Heart extends Component {


	handleClick(e) {
		e.stopPropagation()
		this.props.onHeartToggle();
	}

	render() {
		const hasAHeartClass = (this.props.hasAHeart) ? 'remove_from_queue' : 'add_to_queue'
		return (
      <div>
			<HeartTwoTone
        twoToneColor={hasAHeartClass}
				className={`pin-row-fave ${hasAHeartClass}`}
			    onClick={(e) => this.handleClick(e)}
			/>
      </div>
		)
	}
}

export default Heart;
