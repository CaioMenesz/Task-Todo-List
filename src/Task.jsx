import React from "react";

function Task(props) {
    return (
        <div className="">
            <h3>{props.title}</h3>
            <p>{props.date}</p>
            <p>{props.description}</p>
            <p>{props.completed ? 'Completed' : 'Incomplete'}</p>
        </div>
    );
}

export default Task;