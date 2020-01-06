import React, { Component } from 'react'
import './App.css'
import UserInput from '../src/Components/UserInput'
import UserOutput from '../src/Components/UserOutput'

class App extends Component {
  constructor(){
    super()
    this.state = {
      username: "barry"
    }
  }

  addNum = (e) => {
    this.setState({
      username: e.target.value
    })
    console.log(this.state.username)
  }

  consoleNum = (e) => {
    console.log(e.target.value)
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput
          addNum={this.addNum}
          consoleNum={this.consoleNum}
          curVal={this.state.username}
        />
        <UserOutput
          username = {this.state.username}
          usrname = "Barr"
        />
      </div>
    )
  }
}

export default App