import React from 'react'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'
import styled from 'styled-components'
import data from '../data'

function Footer() {
  return (
    <Container>
      <SocialLinks>
        <Link href={data.links[0].url}>
          <AiOutlineMail />
        </Link>

        <Link href={data.links[1].url} target='_blank'>
          <AiFillLinkedin />
        </Link>
        <Link href={data.links[2].url} target='_blank'>
          <AiOutlineGithub />
        </Link>
      </SocialLinks>
    </Container>
  )
}

export default Footer
const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 10px;
  font-size: 30px;
`

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  transition: var(--transition);
  &:hover {
    transform: scale(1.3);
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Credits = styled.div`
  font-size: 12px;
`
