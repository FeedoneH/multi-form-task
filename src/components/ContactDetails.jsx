import React, {  useState } from "react";
import styled from "styled-components";

import { Input } from "./Input";
import { Container } from "../commons/Container";
import { settings } from "../styles/dropDown";
import { getError, setError } from "../store/error";
import { connect } from "react-redux";
import { validation } from "../tools/validation";
import { Footer } from "./Footer";
import {  getSteps, increaseStep } from "../store/step";
import { ICONS } from "../assets";
import { Row } from "../commons/Row";

const options = [
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Canada", code: "CA" },
  { name: "Cape Verde", code: "CV" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "China", code: "CN" },
];
const mapStateToProps = (state) => ({
  error: getError(state),
  step: getSteps(state),
});

export const ContactDetails = connect(mapStateToProps, {
  setError,
  increaseStep,
})(({ error, setError, step, increaseStep }) => {
  const [fields, setFields] = useState({
    fullName: "",
    email: "",
    country: "",
    phoneNumber: "",
  });
  const handleFieldCHange = (name, value) => {
    setFields({
      ...fields,
      [name]: value,
    });
  };
  const increase = () => {
    console.log("hell");
    if (validation(fields)) {
      increaseStep();
      setError("");
    } else {
      setError(`Please, write your data again.`);
    }
  };

  console.log(fields);

  return (
    <Container>
      <h3>Contact details</h3>
      <p>
        Welcome to United Properties, we are glad to see you! Let’s get started
        by letting us know a little bit about you
      </p>
      <InputContainer>
        <Row>
          <Input
            heading="Full name"
            name="fullName"
            handleFieldChange={handleFieldCHange}
            text={true}
          />
          <Input
            handleFieldChange={handleFieldCHange}
            number
            name="phoneNumber"
          />
        </Row>
        <Input
          heading="E-mail address"
          name="email"
          handleFieldChange={handleFieldCHange}
          text
        />

        <Input
          heading="Country"
          name="country"
          selectBox={true}
          handleFieldChange={handleFieldCHange}
          {...settings}
          options={options}
        />
      </InputContainer>
      <Error>{error}</Error>
      <h5>Privacy policy</h5>
      <p>
        We know you care about how your personal information is used and shared,
        so we take your privacy seriously
      </p>
      <a>
      Expand privacy policy <Img src={ICONS.right_arrow} />
      </a>

      <Footer
        left="Back to the homepage"
        leftonClick={() => alert("Go back to main page")}
        middle="Skip for now"
        middleOnClick={increaseStep}
        right="Next step"
        rightOnclick={increase}
      />
    </Container>
  );
});

const InputContainer = styled.div`
  padding: 10px 0 20px;
`;

const Error = styled.div`
  font-size: 14px;
`;
const Img = styled.img`
  position: relative;
  margin-right: 2px;
  width: 20px;
`;