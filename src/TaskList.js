import './App.css';
import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

function TaskList(props) {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleSubmit(newTask) {
    addTask(newTask);
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TaskForm onAddTask={handleSubmit} />
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            title={task.title}
            description={task.description}
            date={task.date}
            completed={task.completed}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
