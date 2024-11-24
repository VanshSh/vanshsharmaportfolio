import React from "react";
import styled from "styled-components";
import data from "../data";

function Introduction() {
  return <Intro>{data.bio}</Intro>;
}

export default Introduction;

const Intro = styled.p`
  padding: 1rem 0;
  font-size: 2.5rem;
  /* text-align: center; */
  &:hover {
    background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
