import React from "react";

const GoalList = props => {
    console.log( props.mygoals);
    return (
        <ul>
        {props.mygoals.map( mygoals => {
            return <li>{mygoals.text}</li>;
        })};
        </ul>
    );

};

export default GoalList;