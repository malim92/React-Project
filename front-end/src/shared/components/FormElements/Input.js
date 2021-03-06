import React, { useReducer, useEffect } from "react";

import { validate } from "../../util/validators.js" ;
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    default:
    return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: true,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;
  
  useEffect(() => {
    onInput( value, isValid)
  }, [ value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", val: event.target.value, validators: props.validators });
  };
  
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        rows={props.rows || 10}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        value={inputState.value}
      />
    );

    return (
    <div
      className={`form-control ${
        !inputState.isValid && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
