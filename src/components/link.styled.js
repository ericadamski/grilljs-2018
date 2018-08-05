import copy from "copy-to-clipboard";
import React from "react";
import styled from "styled-components";

export const A = styled.a`
  text-decoration: none;
  color: black;

  &:before {
    content: "🔗";
    margin-right: 1rem;
  }

  &:hover {
    text-decoration: underline;
    color: #e2c044;
  }
`;

export const Link = ({ href, file, children }) => (
  <A onClick={e => copy(file)} href={href}>
    {children}
  </A>
);
