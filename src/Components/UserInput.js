import React from 'react'

const UserInput = (props) => {
  return (
    <div>
      <label>Enter something here: </label>
      <input
        type="text"
        value={props.curVal}
        onChange={props.consoleNum}
        onClick={() => console.log(props.username)}
      />
      <button onClick={() => console.log("clicked!")}>Click me!</button>
    </div>
  )
}

export default UserInput