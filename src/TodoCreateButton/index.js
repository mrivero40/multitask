import React from 'react';
import "./TodoCreateButton.css";
import { TodoContext } from '../TodoContext';

function TodoCreateButton() {
    const {toggleTodo} = React.useContext(TodoContext);
    return (
        <button
        className="button-create"
        onClick={
            () => {
                toggleTodo();                
            }}
        >+</button>
    );
};

export { TodoCreateButton };