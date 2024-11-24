import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import data from "../data";

function Experience() {
  return (
    <Wrapper>
      <Title name="Experience" />
      <p>
        {data.experience.map((item) => (
          <Container>
            <Header>
              <h3>{item.post}</h3>
              <Tag>
                {item.startdate} - {item.enddate}
              </Tag>
            </Header>

            <CompanyTag>{item.company}</CompanyTag>
            <p>{item.summary}</p>
          </Container>
        ))}
      </p>
    </Wrapper>
  );
}

export default Experience;
const Tag = styled.span`
  font-size: 12px;
  border: 1px solid #d53369;
  padding: 2px 7px;
  margin-right: 10px;
  border-radius: 5px;
  color: #d53369;
  /* background-color: #333; */
  text-transform: uppercase;
`;
const CompanyTag = styled(Tag)`
  background-color: #333;
  border: none;
  color: inherit;
`;
const Container = styled.div`
  border: 1px solid #d53369;
  margin: 15px 0;
  padding: 10px;
  border-radius: 5px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: flex;

  @media (min-width: 480px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;
