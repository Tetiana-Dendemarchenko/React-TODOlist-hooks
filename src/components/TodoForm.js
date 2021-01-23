import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
    const[input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputFocus = useRef(null);

    useEffect(() => {
        inputFocus.current.focus();
    })

    const handleChange = e => {
        setInput (e.target.value)
    }

    const controlSubmitting = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })

        setInput('');
    };

    return (
        <form className='todo-form' onSubmit={controlSubmitting}>
            {props.edit ? (
                <>
                <input
                    type='text'
                    placeholder='Update Your Task'
                    value={input} name='text'
                    className='todo-input edit'
                    onChange={handleChange}
                    ref={inputFocus}
                />
                <button className='todo-button edit'>Update</button>
                </>
                ) :
                (
                <>
                <input
                type='text'
                placeholder='Please, Create Your Task'
                value={input} name='text'
                className='todo-input'
                onChange={handleChange}
                ref={inputFocus}
                />
                <button className='todo-button'>Add Task</button>
                </>
                )
            }

        </form>
    )
}

export default TodoForm