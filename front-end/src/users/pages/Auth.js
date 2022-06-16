import React, {useState} from "react";

import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
} from "../../shared/util/validators.js";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import "./Auth.css";

const Auth = () => {
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const [isloginMode, setIsLoginMode] = useState(true);

  const switchModeHandler = () => {
    if (!isloginMode){
        setFormData({
            name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
        );
    }
    else {
        setFormData({
            ...formState.inputs,
            name: {
                value:'',
                isValid: false
            }
        }, false);
    }
    setIsLoginMode(prevMode => !prevMode);
  }

  return (
    <Card className="authentication">
        <h2>{!isloginMode ?'Log In': 'Sign Up'}</h2>
        <hr />
      <form>
        {isloginMode && (
            <Input
            id="name"
            type="text"
            element="input"
            rows={1}
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid name"
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          type="email"
          element="input"
          rows={1}
          label="E-mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid E-mail"
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          label="password"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid Password min 5 characters"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>{isloginMode ? 'Login': 'Sign Up'}</Button>
      </form>
      <Button inverse onClick={switchModeHandler}>{!isloginMode ? 'Not registered? Sign up here': 'Registered Already? Log in instead'} </Button>
    </Card>
  );
};

export default Auth;
