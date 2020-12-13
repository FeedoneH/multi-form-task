import React from "react";
import styled from "styled-components";

import { ICONS } from "../assets";
import { Row } from "../commons/Row";
import { COLORS } from "../styles/COLORS";
import { Btn } from "./Btn";

export const Footer = ({
  leftonClick,
  middleOnClick,
  rightOnclick,
  left,
  middle,
  right,
}) => {
  return (
    <Row extended>
      <Button onClick={leftonClick}>
        <Img src={ICONS.left_arrow} />
        {left}
      </Button>

      <BtnContainer>
        <Btn onClick={middleOnClick} name={middle} />
        <Btn dark onClick={ rightOnclick} name={right} />
      </BtnContainer>
    </Row>
  );
};


const BtnContainer = styled.div`
  align-self: flex-end;
  display: flex;
  width: 45%;
  flex-direction: row;

  justify-content: space-between;
  &:first-child {
    margin-right: 15px;
  }
`;

const Button = styled.button`
  padding: 0;
  font-size: 14px;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 14px;
  cursor: pointer;
  height: 20px;
  color: ${COLORS.main_bg};
  align-self: center;
`;
const Img = styled.img`
  position: relative;
  margin-right: 2px;
  width: 20px;
`;
