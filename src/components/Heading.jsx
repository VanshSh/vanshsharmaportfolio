import React from "react";
import data from "../data";
import styled from "styled-components";

function Heading() {
  return (
    <Container>
      <Title>Hi! I am {data.name}.</Title>
      <img
        src={data.profile_picture_url}
        alt="profile_photo-palak_gupta"
        height="100px"
        width="100px"
        style={{ borderRadius: "50%" }}
      />
    </Container>
  );
}

export default Heading;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 480px) {
    flex-direction: column;
    /* text-align: center; */
  }
`;
const Title = styled.h1`
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;
