import React, { useState } from "react";
import { connect } from "react-redux";

import { Container } from "../commons/Container";
import { decreaseStep } from "../store/step";
import { Footer } from "./Footer";
import { Input } from "./Input";
const options = [
  "Single family",
  "Residential multifamily",
  "Commercial retail",
  "Commercial industrial",
  "Commercial hospitality",
  "Commercial warehousing",
  "Commercial office",
  "Other",
];

export const Preferences = connect(null, {decreaseStep})(({decreaseStep}) => {
  const [field, setField] = useState([]);

  console.log(field);
  const handleFieldChange = (value) => {
    const index = field.indexOf(value);

    if (index > -1) {
      field.splice(index, 1);
    } else {
      field.push(value);
    }
    setField(field);
    console.log(field);
  };
  return (
    <Container>
      <h3>Investment preferences</h3>
      <p>
        This will help us figure out what your investment options are so that we
        can show you only possibly intresting for you deals
      </p>
      <h5>What kind of real estate are you interested in?</h5>
      <Input handleFieldChange={handleFieldChange} checkbox options={options} />
      <Footer
        leftonClick={decreaseStep}
        left="Back to the previous step"
        middleOnClick={()=>alert('skip')}
        middle="Skip for now"
        right="Finish"
      />
    </Container>
  );
});
