import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { Container } from "../commons/Container";
import { Row } from "../commons/Row";
import { decreaseStep, increaseStep } from "../store/step";
import { Footer } from "./Footer";
import { Input } from "./Input";

export const Plans = connect(null, { increaseStep, decreaseStep })(
  ({ increaseStep, decreaseStep }) => {
    const [fields, setFields] = useState({ min: 100000, max: 500000 });
    const [accredited, setAccredited] = useState("Yes");

    const handleRadio = (e) => {
      setAccredited(e.target.value);
    };
    const handleFieldCHange = (name, value) => {
      setFields({
        ...fields,
        [name]: +value,
      });
    };
 
    const options = ["Yes", "No"];
    return (
      <Container>
        <h3>Investment plans</h3>
        <p>
          Let us know about your investment plans. This will help us get you to
          the right expert who will help you further
        </p>
        <h5>How much are you planning to invest in this year?</h5>
        <Row>
          <Input
            handleFieldChange={handleFieldCHange}
            type="number"
            name="min"
            text
            prefix="$"
            heading="From"
          />

          <Input
            handleFieldChange={handleFieldCHange}
            type="number"
            name="max"
            text
            prefix="$"
            heading="To"
          />
        </Row>
        <Range>
          <Input
            range
            maxValue={500000}
            minValue={100000}
            step={20000}
            value={fields}
            onChange={(value) => setFields(value)}
          />
        </Range>
        <h5>Are you an accredited investor?</h5>
        <Radio>
          {options.map((option) => (
            <Input
              key={option}
              checked={accredited === option}
              handleFieldChange={handleRadio}
              radio
              option={option}
            />
          ))}
        </Radio>
        <Footer
          leftonClick={()=>decreaseStep()}
          left="Back to the previous step"
          middle="Skip for now"
          middleOnClick={increaseStep}
          rightOnclick={increaseStep}
          right="Next step"
        />

      </Container>
    );
  }
);
const Range = styled.div`
  margin: 20px;
`;

const Radio = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
`;
