import React from "react";

import './NewPlace.css';
import Input from "../../shared/components/FormElements/Input";

const NewPlace = () => {
    return <form className="place-form">
        <Input elememt="input" type="text" label="Title" validators={[]} errorText="please enter a valid text"></Input>
        </form>
}

export default NewPlace;