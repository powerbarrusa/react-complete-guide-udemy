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
  

    render() {
      return (
        <div className="App">
          <UserInput />
          <UserOutput username = {this.state.username} />
        </div>
      )
    }
  }



export default App
