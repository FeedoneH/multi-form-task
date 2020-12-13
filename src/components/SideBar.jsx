import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { ICONS } from "../assets";
import { Row } from "../commons/Row";
import { getSteps } from "../store/step";
import { COLORS } from "../styles/COLORS";
import { corner_detail } from "../styles/cornerdetail";
const mapStateToProps = (state) => ({
  step: getSteps(state),
});
export const SideBar = connect(mapStateToProps)(({ step }) => {
  const navigation = ["Contact details", "Investment plans", "Investment preferences"];
  return (
    <Container>
      <Content>
        <Heading>
          UNITED <span>PROPERTIES</span>
        </Heading>
        <Nav>
          {navigation.map((nav, i) => (
            <li key={i} className={step < i + 1 ? "opacity" : ""}>
              <div>
                <Square>{step > i && <FilledSquare />}</Square>
                <h6>{nav}</h6>
              </div>
              <Dots />
            </li>
          ))}
        </Nav>
        <Quote>
          {corner_detail}
          <SmallRectangle>
            <img alt='symbol' src={ICONS.symbol} />
          </SmallRectangle>

          <p>
            We care about your time, that's why we created a 3-stage onboarding
            that will not take more than 5 minutes to complete
          </p>
          <Author>
            <h5>William Mac</h5>
            <Row>
              <h6>CO-FOUNDER, INVESTOR</h6>
              <h4>
                U<span>P</span>
              </h4>
            </Row>
          </Author>
        </Quote>
      </Content>
    </Container>
  );
});

const Container = styled.div`
  background-color: ${COLORS.main_bg};
  height: 100vh;
  width: 516px;
  display: flex;
  justify-content: center;
  color: white;
`;
const Content = styled.div`
  margin: 0 auto;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;
const Heading = styled.h2`

  font-size: 20px;
  span {
    opacity: 0.6;
  }
  height: calc(100% / 15);
`;
const Quote = styled.div`
  border-radius: 4px;
  margin-bottom: 30px;
  width: 348px;
  height: 250px;
  background-color: white;

  p {
    margin: 13px 30px 40px;
    color: ${COLORS.text_main};
    font-style: italic;
    font-size: 15px;
  }
  h5 {
    margin: 0;
    color: black;
    font-family: "Montserrat Alternates", sans-serif;
  }
  h6 {
    color: ${COLORS.text_main};
    margin:  0;
    font-weight: 500;
    font-size: 14px;
  }
  h4 {
    margin: 0;
    color: black;
    font-weight: 700;
    font-size: 22px;
  }
  span {
    color: ${COLORS.main_bg};
  }
`;
const Author = styled.div`
  margin: 0 30px;
`;
const SmallRectangle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  bottom: 250px;
  z-index: 999;
  left: 60px;
  width: 55px;
  height: 50px;
  background: white;
  color: ${COLORS.main_bg};
  padding: 11px;
  img {
    width: 70%;
    height: 70%;
    z-index: 999;
  }
`;
const Square = styled.div`
  position: relative;
  border: 3px solid white;
  border-radius: 2px;
  width: 21px;
  height: 21px;
  margin: 3px 0 8px;
`;
const FilledSquare = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 8px;
  height: 8px;
`;

const Dots = styled.div`
  background: repeating-linear-gradient(
    to bottom,
    white 0,
    white 8px,
    transparent 8px,
    transparent 15px
  );
  margin-left: 8px;

  height: 28px;
  width: 3px;
`;

const Nav = styled.ul`
  height: calc((100% -300px) / 6);
  padding: 0;

  li {
    padding: 0;
    margin: 0;
    list-style: none;
    &:last-child ${Dots} {
      display: none;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  h6 {
    font-weight: 600;
  
    font-size: 16px;
    margin: 0 0 5px 8px;
  }
`;
