import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/COLORS";
import PhoneInput from "react-phone-number-input";

import Select from "react-dropdown-select";
import InputRange from "react-input-range";

export const Input = ({
  text,
  number,
  selectBox,
  handleFieldChange,
  name,
  heading,
  options,
  values,
  prefix,
  radio,
  option,
  checkbox,
  range,
  ...rest
}) => {
  return (
    <Container>
      <h6>{heading}</h6>
      {text && (
        <form>
          {!!prefix && <span>{prefix}</span>}
          <CustomInput
            className="input"
            onChange={(e) => handleFieldChange(name, e.target.value)}
            name={name}
            {...rest}
          />
        </form>
      )}
      {number && (
        <PhoneInput
          tabIndex={2}
          className="input"
          international
          placeholder="Enter phone number"
          {...rest}
          onChange={(values) => handleFieldChange(name, values)}
        />
      )}
      {selectBox && (
        <Select
          {...rest}
          onChange={(values) => handleFieldChange(name, values)}
          options={options}
        />
      )}
      {radio && (
        <Radio>
          <input
            {...rest}
            id={option}
            key={option}
            name="options"
            type="radio"
            value={option}
            onChange={(e) => handleFieldChange(e)}
          />
          <label htmlFor={option}>{option}</label>
        </Radio>
      )}
      {checkbox && (
        <CheckBox>
          {options.map((option, i) => (
            <div key={i}>
              <input
                {...rest}
                key={option}
                id={option}
                type="checkbox"
                value={option}
                onChange={() => handleFieldChange(option)}
              />
              <label htmlFor={option}>
                <span>{option}</span>
              </label>
            </div>
          ))}
        </CheckBox>
      )}
      {range && <InputRange {...rest} />}
    </Container>
  );
};
const Container = styled.div`
  margin-right: 10px;
  width: 100%;

  h6 {
    color: ${COLORS.text_main};
    margin: 18px 0 3px;
  }
  form {
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    border-bottom: 1px solid ${COLORS.border};
    color: black;
    &:focus-within {
      border-color: ${COLORS.line};
    }
  }
`;
const CustomInput = styled.input`
  border: transparent;
  font-weight: 600;
  line-height: 28px;
  font-size: 15px;
  outline: none;
  width: 100%;
`;

const Radio = styled.form`
  border: none !important;
  margin-top: -15px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  label {
    cursor: pointer;
    position: relative;
    color: ${COLORS.text_main};
    border: 3px solid ${COLORS.border};
    padding: 7px 10px 12px;
    height: 40px;
    width: 105px;
    border-radius: 4px;
  }

  input {
    margin: 0;
    position: absolute;
    margin-left: 12px;
    z-index: 1;
    cursor: pointer;
    &:checked + label {
      color: ${COLORS.main_bg};
      border-color: ${COLORS.main_bg};
      background-color: ${COLORS.secondary_bg};
    }
  }
`;
const CheckBox = styled.form`
  border: none !important;
  margin: 0 !important;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 7px;

    label {
      cursor: pointer;
      position: relative;
      color: ${COLORS.text_main};
      border: 3px solid ${COLORS.border};
      padding-left: 7px;
      height: 125px;
      width: 110px;
      border-radius: 4px;
      text-align: left;
    }
    span {
      position: absolute;
      color: black;
      bottom: 10px;
      font-size: 12px;
      overflow-wrap: break-word;
    }
  }

  input {
    margin: 0;
    position: absolute;
    margin: 10px;
    cursor: pointer;
    z-index: 1;
    border-color: ${COLORS.border};
    &:checked + label {
      span {
        color: ${COLORS.main_bg};
      }
      background-color: ${COLORS.secondary_bg};
      border-color: ${COLORS.main_bg};
    }
  }
`;
