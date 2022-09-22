import React from 'react'
import * as rbs from 'react-bootstrap'

function Message( {variant, children }) {
  return (
    <rbs.Alert variant={variant}>
        {children}
    </rbs.Alert>
  )
}

export default Message