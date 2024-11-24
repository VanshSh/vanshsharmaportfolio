import React from "react";
import { BiDownload } from "react-icons/bi";
import styled from "styled-components";
import data from "../data";

function Resume() {
  return (
    <Link href={data.resume}>
      See my resume here <BiDownload />
    </Link>
  );
}

export default Resume;
const Link = styled.a`
  color: inherit;
  display: flex;
  align-items: center;
  gap: 8px;
`;
