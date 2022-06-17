import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const focus = useRef(null) 

    useEffect(() => {
        focus.current.focus();
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('')

    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? ( 
                <>
            <input 
                type="text" 
                placeholder="Update task"
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChange}
                ref={focus}
            />
            <button className='todo-button'>Update</button>
            </>
            ): 
            (
            <>
            <input 
                type="text" 
                placeholder="Add a task"
                value={input}
                name='text'
                className='todo-input edit'
                onChange={handleChange}
                ref={focus}
            />
            <button className='todo-button edit'>Add Task</button>
            </>
            )
            }
        </form>
    )
}

export default TodoForm