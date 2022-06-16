import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators.js";
import { useForm } from "../../shared/hooks/form-hook";
import "./placeForm.css";

const DUMMY = [{
  id:'p1',
  title:'name example',
  description:'description example',
  imageUrl:'https://lp-cms-production.imgix.net/2021-11/shutterstockRF_221218363.jpg?format=auto&crop=entropy&fit=crop&h=800&sharp=10&vib=20&w=1200',
  address:'name example',
  location:{
      lat:40.24324,
      lng:-73.4234
  },
  creator:'u1'
},
{
  id:'p2',
  title:'Property 2',
  description:'description for prop 2',
  imageUrl:'https://lp-cms-production.imgix.net/2021-11/shutterstockRF_221218363.jpg?format=auto&crop=entropy&fit=crop&h=800&sharp=10&vib=20&w=1200',
  address:'name example',
  location:{
      lat:40.24324,
      lng:-73.4234
  },
  creator:'u1'
}]

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().id;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const targetPlace = DUMMY.find((p) => p.id === placeId);

  useEffect(() => {
    if (targetPlace) {
      setFormData(
        {
          title: {
            value: targetPlace.title,
            isValid: true,
          },
          description: {
            value: targetPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, targetPlace]);

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!targetPlace) {
    return (
      <>
        <div className="center">
          <Card>
            <h2>Could not find place!</h2>
          </Card>
        </div>
      </>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        className=""
        id="title"
        element="input"
        type="text"
        label="title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid text"
        onInput={inputHandler}
        value={formState.inputs.title.value}
        valid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid text min 5 characters"
        onInput={inputHandler}
        value={formState.inputs.description.value}
        valid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
