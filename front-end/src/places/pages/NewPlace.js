import React from "react";

import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators.js";
import { useForm } from "../../shared/hooks/form-hook";
import "./placeForm.css";
import Button from "../../shared/components/FormElements/Button";



const NewPlace = () => {

  const [formState, inputHandler] = useForm ( {
    title: {
      value: "",
      isValid: false,
    },
    description: {
      value: "",
      isValid: false,
    },
    address: {
      value: "",
      isValid: false,
    },
  }, false);

  const placeSubmitHandler = event => {
    event.preventDefault();
    //console.log(formState.inputs);
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        elememt="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter a valid text"
        onInput={inputHandler}
      ></Input>
      <Input
        id="description"
        elememt="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter a valid description"
        onInput={inputHandler}
      ></Input>
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>Add Place</Button>
    </form>
  );
};

export default NewPlace;
