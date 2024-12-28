import React from 'react'
import styled from 'styled-components'
import { LINEAR_GRADIENTS } from '../constants'
import data from '../data'

function Introduction() {
  return <Intro>{data.bio}</Intro>
}

export default Introduction

const Intro = styled.p`
  padding: 1rem 0;
  font-size: 1.5rem;
  &:hover {
    background: ${LINEAR_GRADIENTS.GRADIENT_2};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`
