import React from 'react';

import ListItem from "./ListItem";

const List = ({ todos, onChange }) => {
    const onDeleteItem = (id) => {
        onChange ( todos.filter ( item => item.id !== id ) )
    }

    const onSwitchItem = (id) => {
        onChange ( todos.map ( item => {
            if ( item.id === id ) {
                return { ...item, isDone: ! item.isDone }
            }

            return item;
        } ) )
    }

    const onItemChangeHandler = (id, name) => {
        onChange ( todos.map ( item => {
            if ( item.id === id ) {
                return { ...item, name }
            }

            return item;
        } ) )
    }

    const renderItem = (item) => {
        return (
            <ListItem
                key={item.id}
                item={item}
                onSwitch={onSwitchItem}
                onDelete={onDeleteItem}
                onItemChange={onItemChangeHandler}
            />
        );
    }

    return (
        <div>
            <div>
                CURRENT PLANS:
                {todos.map ( (item) => ! item.isDone && renderItem ( item ) )}
            </div>
            <hr/>
            <div>
                LIST OF COMPLETED TASKS:
                {todos.map ( (item) => item.isDone && renderItem ( item ) )}
            </div>
        </div>
    );
}

export default List;
