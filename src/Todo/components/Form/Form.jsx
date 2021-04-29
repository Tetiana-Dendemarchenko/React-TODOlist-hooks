import React, {useState, useRef} from 'react';
import * as PropTypes from "prop-types";
import './Form.css';

const Form = ({ onSubmit }) => {
    const taskNameRef = useRef ( null );
    const [taskName, setTaskName] = useState ( '' )

    const handleNameChange = (event) => {
        setTaskName ( event.target.value );
    }

    const addItem = (event) => {
        event.preventDefault ();
        setTaskName ( '' );
        taskNameRef.current.focus ();
        onSubmit ( taskName );
    }

    return (
        <form id='todo-form' onSubmit={addItem}>
            <input type='text' placeholder='Please, Create a Task!'
                   value={taskName}
                   onChange={handleNameChange}
                   ref={taskNameRef}
            />
            <button id='todo-form-button' type='submit'>Add Task</button>
        </form>
    );

}

Form.propTypes = {
    onSubmit: PropTypes.func
}

export default Form;
