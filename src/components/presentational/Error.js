import React from 'react'

const Error = props => {
  var {message} = props
  return(
    <div className="error">
      <h1>
        {message}
      </h1>
    </div>
  )
}
export default Error
