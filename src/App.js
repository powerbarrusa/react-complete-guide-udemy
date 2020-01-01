import React, { Component } from 'react'
import './App.css'
import UserInput from '../src/Components/UserInput'
import UserOutput from '../src/Components/UserOutput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput />
      </div>
    )
  }
}

export default App
