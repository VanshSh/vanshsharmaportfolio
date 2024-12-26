import React from 'react'

function SubTitle({ name, ...rest }) {
  return <h3 {...rest}>{name}</h3>
}

export default SubTitle
