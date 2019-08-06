import React, { Component } from 'react';

import Timer from './Timer'

class App extends Component {

  //no props being used here, so we can use the shorthand declaration of state
  state = {
    timerIDs: []
  }


  //Your code here:

  componentDidMount() {
    this.handleAddTimer()
  }

  // No need to modify anything in render or the class methods below
  // Unless, of course, you're curious about how it all works
  render() {

    return (
      <div className="App">
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add New Timer</button>

        <div className="TimerGrid">
          {this.renderTimers()}
        </div>

      </div>
    );
  }

  // returns array of components written in JSX, mapped from this.state.timerIDs
  renderTimers = () => this.state.timerIDs.map(id => {
    return <Timer key={id} id={id} removeTimer={this.removeTimer} />
  })

  // adds a random number for timer ID
  handleAddTimer = () => {
    this.setState(prevState => ({
      timerIDs: [
        ...prevState.timerIDs,
        this.newUniqueKey(prevState.timerIDs)
      ]
    }))
  }

  newUniqueKey = (excludedKeys) => {
    let key = Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)
    while (excludedKeys.includes(key)){
      key = Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)
    }
    return key
  }

  // removeTimer updates state, removing any timer that matches the provided author
  removeTimer = id => {
    this.setState(prevState => ({
      timerIDs: prevState.timerIDs.filter(timer_id => timer_id !== id)
    }))
  }


}

export default App;
