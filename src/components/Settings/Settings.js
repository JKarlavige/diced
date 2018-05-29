import React, { Component } from 'react'
import './Settings.css'
/* Helpers */
import createArray from '../../helpers/createArray.js'

class Settings extends Component {
	render() {
		// Set Max Dice Allowed for App
		let maxDice = 6
		let maxDiceArray = createArray(1,maxDice)
		// Set Sides Allowed for App
		let sidesArray = [6, 8, 10, 12, 20]
		return (
			<div id='menu-settings'>
				<div className='menu-selector'>
					<h2># of Dice</h2>
					<select 
						defaultValue={this.props.numDice}
						onChange={this.props.adjustDice}
					>
	          {maxDiceArray.map((number) => (
	            <option 
	              value={number} 
	              key={number}
	            >{number}</option>
	          ))}
	        </select>
	      </div>
	      <div className='menu-selector'>
	      	<h2># of Sides</h2>
					<select 
						defaultValue={this.props.numSides}
						onChange={this.props.adjustSides}
					>
	          {sidesArray.map((side) => (
	            <option 
	              value={side} 
	              key={side}
	            >{side}</option>
	          ))}
	        </select>
	      </div>
			</div>
		)
	}
}

export default Settings