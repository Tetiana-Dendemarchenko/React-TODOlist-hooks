import React, {useState} from 'react';

import Form from "./components/Form/Form";
import List from "./components/List/List";

const Todo = () => {
    const [todos, setTodos] = useState ( [] );

    const addItem = (itemName) => {
        const item = {
            id: Date.now (),
            name: itemName,
            isDone: false
        }

        setTodos ( [...todos, item] )
    }

    return (
        <div className='Todo'>
            <Form onSubmit={addItem}/>
            <List todos={todos} onChange={(todos) => setTodos ( todos )}/>
        </div>
    );
}

export default Todo;
