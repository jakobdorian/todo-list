import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Todo({tasks, completeTask, removeTask, editTask}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const sumbitUpdate = value => {
        editTask(edit.id, value)
        setEdit({
            id: null,
            value:''
        })
    }

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={sumbitUpdate} />
    }

    return tasks.map((task, index) => (
        <div className={task.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={task.id} onClick={() => completeTask(task.id)}>
                {task.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine 
                onClick={() => removeTask(task.id)} 
                className="delete-icon"
                />
                <TiEdit 
                onClick={() => setEdit({id: task.id, value: task.text })}
                className="delete-icon"
                />
            </div>

        </div>
    
    ))
    
}

export default Todo