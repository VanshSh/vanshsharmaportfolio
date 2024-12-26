import React from 'react'
import styled from 'styled-components'
import { LINEAR_GRADIENTS } from '../constants'
import data from '../data'

function Heading() {
  return (
    <Container>
      <Title>Hi! I am {data.name}.</Title>
      <img
        src={data.profile_picture_url}
        alt='profile_photo-palak_gupta'
        height='100px'
        width='100px'
        style={{ borderRadius: '50%' }}
      />
    </Container>
  )
}

export default Heading

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`
const Title = styled.h1`
  background: ${LINEAR_GRADIENTS.GRADIENT_2};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`
