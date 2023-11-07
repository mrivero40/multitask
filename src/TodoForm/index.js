import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const { toggleTodo } = React.useContext(TodoContext);
    return (
        <form
            className="form-container"
            onSubmit={(event) => {
                event.preventDefault();
            }}>
                <label>Crea una nueva TAREA</label>
                <textarea
                    className="text-area"
                    placeholder="Ingresa la nueva tarea">                    
                </textarea>
                <div className="button-container">
                    <button
                        className="button-cancel"
                        onClick={toggleTodo}
                    >Cancelar</button>
                    <button
                        className="button-save"
                    >Crear</button>
                </div>
        </form>
    )
};

export { TodoForm };