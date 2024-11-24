import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import data from "../data";
import { BsLink45Deg } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
// import { BiLinkExternal } from "react-icons/bi";
function Projects() {
  return (
    <Wrapper>
      <Title name="Projects" />
      <div>
        {data.projects.map((item) => (
          <Container>
            <Header>
              <ProjectTitle href={item.repo_url} target="_blank">
                {item.name}
              </ProjectTitle>
              <div>
                {item.live_url && (
                  <Link href={item.live_url} target="_blank">
                    <BsLink45Deg />
                    Demo
                  </Link>
                )}
                {item.repo_url && (
                  <Link href={item.repo_url} target="_blank">
                    <BsGithub />
                    Github
                  </Link>
                )}
              </div>
            </Header>
            <p>{item.summary}</p>
            {item.tags.map((tag) => (
              <Tag> {tag} </Tag>
            ))}
          </Container>
        ))}
      </div>
    </Wrapper>
  );
}

export default Projects;
const Tag = styled.span`
  font-size: 10px;
  border: 1px solid #333;
  padding: 2px 7px;
  margin-right: 10px;
  border-radius: 5px;
  /* color: #606060; */
  background-color: #333;
  text-transform: uppercase;
`;
const Link = styled.a`
  font-size: 14px;
  border: 1px solid #d53369;
  padding: 2px 10px;
  margin-right: 10px;
  border-radius: 5px;
  color: #d53369;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  svg {
    margin-right: 5px;
  }
  /* background-color: #333; */
`;
const Container = styled.div`
  border: 1px solid #d53369;
  margin: 20px 0;
  padding: 10px;
  border-radius: 5px;
  transition: var(--transition);
  &:hover {
    transform: scale(1.05);
  }
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

const ProjectTitle = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  font-weight: 600;
`;

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;
