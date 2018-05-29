import React, { Component } from 'react'

import './Board.css'
import './dice.css'

/* Helpers */
import createChunk from '../../helpers/createChunk.js'

class Board extends Component {
	render() {
		let numSides = this.props.numSides
		let chunks = createChunk(this.props.result)
		return (
			<section id='board'>
				<div id='dice-contain'>
					{chunks.map((subarray, subIndex) => {
						return (
							<div className='row' key={subIndex}>
								{subarray.map((value, index) => (
									<span 
										className={`dice dice-${numSides}-${value}`} 
										title={`Dice ${value}`}
										key={index}
									></span>
								))}
							</div>
						)
					})}
				</div>
			</section>
		)
	}
}

export default Board

