// Destructurando props con el nombre de la props.propiedad que queremos utilizar = recibir props y utilizar props.total y props.completed.-

import './TodoCounter.css';

const styleH1 = {
    fontSize: "2rem",
    textAlign: "center",
    fontFamily: "Ubuntu",
    margin: 0,
    padding: "2rem",
    color: "#B3B3B3",
};

const spanH1 = {
    color: "#F5B041",
};

function TodoCounter({ total, completed }) {
    return (
        <header>
            <h1 style={styleH1}>
                <span style={spanH1}>APP</span> Lista de tareas
            </h1>
            <h2 style={{
                textAlign: "center",
                fontFamily: "Ubuntu",
                fontWeight: "300",
                margin: 0,
            }}>
                Completadas <span style={{color: "green", fontWeight: "bold",}}>{completed}</span> de <span style={{color: "red", fontWeight: "bold",}}>{total}</span> TAREAS!!
            </h2>
            <h3>
                Organiza las tareas diarias/semanales/mensuales.
            </h3>
        </header>
    );
};

export { TodoCounter };