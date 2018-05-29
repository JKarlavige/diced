/* Components */
import React, { Component } from 'react'
import Menu from './components/Menu/Menu.js'
import Board from './components/Board/Board.js'
import Roll from './components/Roll/Roll.js'
import Loading from './components/Loading/Loading.js'
/* Helpers */
import createArray from './helpers/createArray.js'
import randomRoll from './helpers/randomRoll.js'
import delayRoll from './helpers/delayRoll.js'

/* Styles */
import './App.css'

class App extends Component {
  state = {
    numDice: 2,
    numSides: 6,
    rollResult: [1,2],
    total: 0,
    loading: false,
  }

  rollDice() {
    this.setState({ loading:true })
    // Creates array holding each die
    let dice = createArray(1,this.state.numDice)
    // Rolls each die and returns array with results
    let rollResult = dice.map((dieNumber) => (
      dieNumber = randomRoll(this.state.numSides)
    ))
    // Adds results to produce total
    let total = rollResult.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    )
    // Updates roll results and total states
    const startRoll = () => {
      this.setState(prevState => ({ 
        rollResult: rollResult,
        total: total,
        loading:false,
      }))
    }
    delayRoll(startRoll)
  }

  adjustDice(e) {
    let diceVal = e.target.value
    this.setState({ 
      numDice: diceVal,
      rollResult: createArray(1,diceVal),
      total: 0,
    })
  }

  adjustSides(e) {
    let sidesVal = e.target.value
    this.setState({ 
      numSides: sidesVal,
      rollResult: createArray(1,this.state.numDice),
      total: 0,
    })
  }

  render() {
    let isLoading = this.state.loading
    return (
      <main>
        <Menu 
          total={this.state.total}
          numDice={this.state.numDice}
          numSides={this.state.numSides}
          adjustDice={this.adjustDice.bind(this)}
          adjustSides={this.adjustSides.bind(this)}
        />
        {isLoading ?
          <Loading />
        :
          <Board 
            result={this.state.rollResult}
            numSides={this.state.numSides}
          />
        }
        <Roll rollDice={this.rollDice.bind(this)} />
      </main>
    )
  }
}

export default App
