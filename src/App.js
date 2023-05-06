import logo from './logo.svg';
import './App.css';
import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import Task from './Task'; 

function App() {
  return (
    <div className="App-container">
      <div className='App'>
        <h1>Minhas Tarefas</h1>
        <TaskForm/>
        <Task
        title="Comprar mantimentos"
        description="Comprar pão, leite e ovos"
        date="01/05/2023"
        completed={false}
      />
      </div>
    </div>
  );
}

export default App;
