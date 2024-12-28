import React from 'react'
import { HEADING_COLOR } from '../constants'

function Title({ name }) {
  return <h2 style={{ color: HEADING_COLOR }}>{name.toUpperCase()}</h2>
}

export default Title
