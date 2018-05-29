import React, {Component} from 'react'
import loading from '../../images/dice-6-loading.gif'
import './Loading.css'

class Loading extends Component {
  render() {
    return (
    	<section id='loading-contain'>
    		<img class='loader' src={loading} alt='Loading' />
  		</section>
    )
  }
}

export default Loading