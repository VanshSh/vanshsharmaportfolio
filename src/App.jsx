import React, { useEffect } from 'react'
import styled from 'styled-components'
import Footer from './components/Footer'
import Heading from './components/Heading'
import Introduction from './components/Introduction'
import Resume from './components/Resume'
import SocialLinks from './components/SocialLinks'
import {
  GET_PUBLICATION_POSTS_GRAPHQL_QUERY,
  LINEAR_GRADIENTS,
} from './constants'
import { gql } from './helper'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await gql(GET_PUBLICATION_POSTS_GRAPHQL_QUERY)
        console.log(response.data.publication.posts.edges)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])
  return (
    <React.Fragment>
      <div style={{ marginBottom: '50px' }}>
        <Heading />
        <Introduction />
        <Container>
          <SocialLinks />
          <Resume />
        </Container>
      </div>
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </React.Fragment>
  )
}

export default App
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: ${LINEAR_GRADIENTS.GRADIENT_4};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 480px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
