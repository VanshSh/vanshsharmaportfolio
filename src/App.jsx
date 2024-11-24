import React from "react";
import Heading from "./components/Heading";
import Introduction from "./components/Introduction";
import Skills from "./pages/Skills";
import SocialLinks from "./components/SocialLinks";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import styled from "styled-components";

function App() {
  return (
    <React.Fragment>
      <div
        style={{
          height: "90vh",
        }}
      >
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
  );
}

export default App;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: linear-gradient(90deg, #d53369 0%, #daae51 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 480px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
