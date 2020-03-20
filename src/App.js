import React, { Component } from 'react'
import './App.css'
import UserInput from '../src/Components/UserInput'
import UserOutput from '../src/Components/UserOutput'
import ValidationComponent from '../src/Components/ValidationComponent'

class App extends Component {
  constructor(){
    super()
    this.state = {
      username: "barry",
      textLength: 0,
      textAlert: "Test"
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

  textListen = (e) => {
    this.setState({
      textLength: e.target.value.length
    })
  }

  lengthAlert = () => {
    if (this.state.textLength > 5){
      this.setState({
        textAlert: "Text too long"
      })
    }
  }
  

  render() {
    return (
      <div className="App">
        <input
          onChange={this.textListen}
          type="text"
        />
        {this.state.textLength}
        <UserInput
          addNum={this.addNum}
          consoleNum={this.consoleNum}
          curVal={this.state.username}
        />
        <UserOutput
          username={this.state.username}
          usrname="Barr"
        />
        <ValidationComponent
          textLength={this.state.textLength}
          textAlert={this.state.textAlert}
          lengthAlert={this.lengthAlert}
        />
      </div>
    )
  }
}

export default App