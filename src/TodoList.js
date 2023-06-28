// Este ej. muestra recibiendo props sin destructuración, para luego utilizarlas a partir de props.propiedad.-

import "./TodoList.css";

function TodoList(props) {
    return (
        <ul className="TodoList">
            {props.children}
        </ul>
    );
};

export { TodoList };