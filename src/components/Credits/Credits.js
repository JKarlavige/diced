import React, { Component } from 'react'
import './Credits.css'
import menuIcon from '../../images/menu-icon.svg'
import jkLogo from '../../images/jk_light.svg'
import reactLogo from '../../images/react-logo.svg';
/* Helpers */
import handleMenu from '../../helpers/handleMenu.js'

class Credits extends Component {
	render() {
		return [
			<div id='mobile-menu' onClick={handleMenu} key={1}>
				<i className='fas fa-bars'></i>
			</div>,
			<section id='credits' key={2}>
				<div className='credit-block'>
					<span>Developed by</span>
					<a href='http://jasonkarlavige.com' id='credit-logo' target='_blank'><img src={jkLogo} id="jk-logo" alt="Jason Karlavige"/></a>
				</div>
				<div className='credit-block'>
					<span>Dice Styles by</span>
					<a href='https://game-icons.net/tags/dice.html' target='_blank'>Game-icons.net</a>
					<a href='https://websemantics.uk/tools/svg-to-background-image-conversion/' target='_blank'>webSemantics</a>
				</div>
				<div className='credit-block'>
					<span id='credit-react'>Made with React</span>
					<img src={reactLogo} id="react-logo" alt="logo" />
				</div>
			</section>
		]
	}
}

export default Credits

