import React from "react";

function Task(props) {
    const {title, description, date, completed, onDelete} = props;

    function handleDelete() {
        onDelete(title);
    }

    return (
        <div className="">
            <h3>{props.title}</h3>
            <p>{props.date}</p>
            <p>{props.description}</p>
            <p>{props.completed ? 'Completed' : 'Incomplete'}</p>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default Task;