import './App.css';
import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

function TaskList(props) {
  const [tasks, setTasks, onDelete] = useState([]);

  function addTask(newTask) { 
    setTasks([...tasks, newTask]);
  }

  function deleteTask(index) {
    const updateTasks = [...tasks]
    updateTasks.splice(index, 1);
    setTasks(updateTasks);
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
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
