// Destructurando props con el nombre de la props.propiedad que queremos utilizar = recibir props y utilizar props.total y props.completed.-

import './TodoCounter.css';

const styleH1 = {
    fontSize: "2rem",
    textAlign: "center",
    fontFamily: "Oxygen",
    margin: 0,
    padding: "2rem",
};

function TodoCounter({ total, completed }) {
    return (
        <header>
            <h1 style={styleH1}>
                APP Lista de tareas
            </h1>
            <h2 style={{
                textAlign: "center",                
            }}>
                Completadas {completed} de {total} TAREAS !!
            </h2>
            <h3>
                Organiza las tareas diarias/semanales/mensuales.
            </h3>
        </header>
    );
};

export { TodoCounter };