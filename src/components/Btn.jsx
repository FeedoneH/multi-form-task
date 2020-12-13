import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/COLORS";

export const Btn = ({ name, dark,onClick }) => {
  return <Button onClick={onClick} dark={dark}>{name}</Button>;
};
const Button = styled.button`
  outline: none;
  border: none;
  padding: 0 30px;
  /* width: 100%; */
  height: 40px;
  size: 15px;
  line-height:20px;
  border-radius: 4px;
  background-color: ${(p) =>
    p.dark ? COLORS.main_bg : "rgba(53, 160, 238, 0.1)"};
  color: ${(p) => (p.dark ? "white" : COLORS.main_bg)};
  cursor:pointer;
`;
