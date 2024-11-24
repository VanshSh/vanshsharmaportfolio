import React from "react";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import data from "../data";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import styled from "styled-components";

function Skills() {
  return (
    <div>
      <Title name="Skills" />
      <div>
        <div>
          <TitleContainer>
            <HiOutlineDesktopComputer style={{ marginRight: "10px" }} />
            <SubTitle name="Development" />
          </TitleContainer>

          <div
            style={{ display: "flex", flexWrap: "wrap", marginBottom: "1rem" }}
          >
            {data.skills.development.map((item) => (
              <Tag> {item} </Tag>
            ))}
          </div>
        </div>
        <div>
          <TitleContainer>
            <FiSettings style={{ marginRight: "10px" }} />
            <SubTitle
              name="Other tools & technologies"
              style={{ marginRight: "10px" }}
            />
          </TitleContainer>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data.skills.tools.map((item) => (
              <Tag> {item} </Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  /* font-size:   25px; */
`;

const Tag = styled.p`
  border: 1px solid #333;
  padding: 2px 10px;
  margin: 10px 10px;
  border-radius: 5px;
`;
