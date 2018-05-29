import React, { Component } from 'react'
import './Roll.css'

class Roll extends Component {
	render() {
		return (
			<button id='roll-btn' className='trans-bg' onClick={this.props.rollDice}>Roll</button>
		)
	}
}

export default Roll

