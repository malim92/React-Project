import React from "react";

import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators.js";
import './NewPlace.css';


const NewPlace = () => {
    return <form className="place-form">
        <Input elememt="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText="please enter a valid text"></Input>
        </form>
}

export default NewPlace;