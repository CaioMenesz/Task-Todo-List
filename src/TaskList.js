import './App.css';
import './Task.jsx';
import React from 'react';

function TaskList() {
  const tasks = [
    { id: 1, description: 'Comprar leite' },
    { id: 2, description: 'Pagar a conta de luz' },
    { id: 3, description: 'Ligar para o médico' },
  ];

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ul>
    </div>
  );
}
  
  export default TaskList;