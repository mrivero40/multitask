// Este ej. muestra recibiendo props sin destructuración, para luego utilizarlas a partir de props.propiedad.-

function TodoList(props) {
    return (
        <ul>
            {props.children}
        </ul>
    );
};

export { TodoList };