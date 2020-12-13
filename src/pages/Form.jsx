import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../styles/COLORS";
import { ContactDetails } from "../components/ContactDetails";
import { Plans } from "../components/Plans";
import { getSteps} from "../store/step";

import { Preferences } from "../components/Preferences";
import { Row } from "../commons/Row";
import { ICONS } from "../assets";
import { getError } from "../store/error";

const mapStateToProps = (state) => ({
  step: getSteps(state),
  error: getError(state),
});

export const Form = connect(mapStateToProps, {
  
})(({ step,  }) => {
  return (
    <Container>
      <Row>
        <h5> Step {step} of 3</h5>
        <h5>
          Lost or have trouble?{" "}
          <a>
            Get Help <Img src={ICONS.right_arrow} />
          </a>
        </h5>
      </Row>
      <Content>
        {step === 1 && <ContactDetails />}
        {step === 2 && <Plans />}
        {step === 3 && <Preferences />}
      </Content>
    </Container>
  );
});
const Container = styled.div`
  position: absolute;
  width: 600px;
  left: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  a {
    color: ${COLORS.main_bg};
  }
  h5:nth-child(-n + 2) {
    color: ${COLORS.text_main};
  }
  h5:first-child {
    text-transform: uppercase;
  }
`;

const Content = styled.div`
  margin-top: 30px;
`;

const Img = styled.img`
  position: relative;
  margin-right: 2px;
  width: 20px;
`;
