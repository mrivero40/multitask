// Destructurando props con el nombre de la props.propiedad que queremos utilizar = recibir props y utilizar props.total y props.completed.-
import React from 'react';
import './TodoCounter.css';

const styleH1 = {
    fontSize: "3rem",
    textAlign: "center",
    fontFamily: 'Ubuntu Mono, sans-serif',
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
                <span style={spanH1}>APP</span>Multi-task
            </h1>
            <h2 style={{
                textAlign: "center",
                fontFamily: "Ubuntu Mono, sans-serif",
                fontWeight: "300",
                margin: 0,
            }}>
                Completadas <span style={{color: "rgb(245, 176, 65)", fontWeight: "bold",}}>{completed}</span> de <span style={{color: "rgb(245, 176, 65)", fontWeight: "bold",}}>{total}</span> TAREAS!!
            </h2>
            <h3>
                Organiza las tareas diarias/semanales/mensuales.
            </h3>
        </header>
    );
};

export { TodoCounter };