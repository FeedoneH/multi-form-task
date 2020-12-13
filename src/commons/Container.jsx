import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/COLORS";

export const Container = ({ children }) => {
  return <Content>{children}</Content>;
};
const Content = styled.div`
  padding: 20px 0;
  height: 500px;
  margin-bottom: 25px;
  left: 800px;
  width: 500px;
  display: flex;
  flex-direction: column;
  h3 {
    margin: 6px 0;
    font-weight: 800;
  }
  h5 {
    margin-top: 15px;
    font-size: 20px;
    margin-bottom: 5px;
    font-weight: 700;
  }
 a{
   font-size: 15px;
 }
  p {
    margin: 8px 0;
    font-size: 13px;
    line-height: 24px;
    color: ${COLORS.text_main};
  }
`;

