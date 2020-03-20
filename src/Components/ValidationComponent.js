import React from 'react'

const ValidationComponent = (props) => {
  return (
    <div className="container">
      <div>
        This is the div to click on
      </div>
      {props.textAlert}
    </div>
  )
}

export default ValidationComponent