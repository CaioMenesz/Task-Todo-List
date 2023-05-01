import React, {useState} from 'react';

function TaskForm() {

    const[newTask, setNewTask] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Adicionando tarefa: ${newTask}');
        setNewTask('');
    }

    function handleChange(event) {
        setNewTask(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Adicionar Tarefa' value={newTask} onChange={handleChange}></input>
            <button type='submit'>Adicionar Tarefa</button>
        </form>
    );    
}

export default TaskForm;