import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

let btnIsDisable = true;

function TodoForm() {
    const {
        addTodo,
        toggleTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        toggleTodo();
        setOpenModal(false);        
    };

    const onCancel = () => {
        toggleTodo();
        btnIsDisable = true;
    };

    const onChange = (event) => {
        let valueTextArea = event.target.value;
        
        setNewTodoValue(valueTextArea.trim());
        if(valueTextArea.length >= 2) {
            btnIsDisable = false;
        };
        if(valueTextArea.length === 0) {
            btnIsDisable = true;
        };
    };

    return (
        <form
            className="form-container"
            onSubmit={onSubmit}
            value={newTodoValue}
            onChange={onChange}>
                <label>Crea una nueva TAREA</label>
                <textarea
                    className="text-area"
                    placeholder="Ingresa la nueva tarea"
                    autoFocus
                    required
                />                    
                <div className="button-container">
                    <button
                        type="button"
                        className="button-cancel"
                        onClick={onCancel}
                    >Cancelar</button>
                    <button
                        type="submit"
                        disabled={btnIsDisable}
                        className="button-save"
                        onClick={onSubmit}
                    >Crear</button>
                </div>
        </form>
    )
};

export { TodoForm };