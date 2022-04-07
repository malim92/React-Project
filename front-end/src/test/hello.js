import React, { useState } from "react";
import "../shared/components/FormElements/Input.css";

const Hello = () => {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  const Input = (props) => {
    const element =
      props.element === "input" ? (
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
        />
      ) : (
        <textarea id={props.id} rows={props.rows || 3} />
      );

    return (
      <div className={`form-control`}>
        <label htmlFor={props.id}>{props.label}</label>
        {element}
      </div>
    );
  };

  return (
    <React.Fragment>
      <Input element='input' errorText="please enter a valid text" validators={[]}></Input>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </React.Fragment>
  );
};

export default Hello;
