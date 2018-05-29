import React, { Component } from 'react'
import Settings from '../../components/Settings/Settings.js'
import './Menu.css'
import logo from '../../images/logo.png'

class Menu extends Component {
	render() {
		return (
			<section id='menu'>
				<img id='logo' src={logo} alt='Diced' />
				<div id='roll-result'>
					<h1>Roll Result</h1>
					<div id='roll-result-box'>
						<span>{this.props.total}</span>
					</div>
				</div>
				<Settings 
					numDice={this.props.numDice}
					numSides={this.props.numSides}
					adjustDice={this.props.adjustDice}
					adjustSides={this.props.adjustSides}
				/>
			</section>
		)
	}
}

export default Menu