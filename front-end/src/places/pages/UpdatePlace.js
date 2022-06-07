import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators.js";

const DUMMY = [
  {
    id: "p1",
    title: "name example",
    description: "description example",
    imageUrl:
      "https://lp-cms-production.imgix.net/2021-11/shutterstockRF_221218363.jpg?format=auto&crop=entropy&fit=crop&h=800&sharp=10&vib=20&w=1200",
    address: "name example",
    location: {
      lat: 40.24324,
      lng: -73.4234,
    },
    creator: "u1",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().id;
  const targetPlace = DUMMY.find((p) => p.id === placeId);
  if (!targetPlace) {
    return (
      <>
        <div className="center">
          <h3>Couldn't find the requested place</h3>
        </div>
      </>
    );
  }

  return (
    <form>
      <Input className=""
        id="title"
        element="input"
        type="text"
        label="title"
        validator={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid text"
        onInput={() => {}}
        value={targetPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validator={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid text min 5 characters"
        onInput={() => {}}
        value={targetPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
