import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if(!task.text || task.text.length < 3) {
            return;
        }
        const newTasks = [task, ...tasks]

        setTasks(newTasks);
        console.log(...tasks);
    }

    const removeTask = id => {
        const removeArray = [...tasks].filter(task => task.id !== id)
        setTasks(removeArray);
    }

    const completeTasks = id => {
        let updatedTask = tasks.map(task => {
            if(task.id === id) {
                task.isComplete = !task.isComplete
            }
            return task;
        })
        setTasks(updatedTask);
    }
    
    return(
        <div>
            <h1>What do you have to do today?</h1>
            <TodoForm onSubmit={addTask} />
            <Todo 
            tasks={tasks}
            completeTasks={completeTasks}
            removeTask={removeTask}
            />
        </div>
    )
}

export default TodoList