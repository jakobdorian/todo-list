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

    const editTask =  (taskID, newValue) => {
        if(!newValue.text || newValue.text.length < 3) {
            return;
        }

        setTasks(prev => prev.map(item => (item.id === taskID ? newValue : item)))
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
        });
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
            editTask={editTask}
            />
        </div>
    )
}

export default TodoList