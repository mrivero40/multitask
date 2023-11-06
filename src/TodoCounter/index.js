// Destructurando props con el nombre de la props.propiedad que queremos utilizar = recibir props y utilizar props.total y props.completed.-
import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const {
        totalTodos,
        completedTodos,
        complete,
    } = React.useContext(TodoContext)
    return (
        <header>
            <h1>
                <span>APP</span>-titud
            </h1>            
                            
            {totalTodos !== completedTodos && (
                <h2>
                    Completados <span>{completedTodos}</span> de <span>{totalTodos}</span> objetivos
                </h2>
            )}

            {(totalTodos === 0 && completedTodos === 0) && (
                <h2>
                    Bienvenido!! 😎
                </h2>
            )}

            {(complete && completedTodos > 0) && (
                <h2>
                    Felicitaciones!! 😍
                </h2>
            )}                    
            
            <h3>
                Organiza Proyectos | Ideas | Deseos
            </h3>
        </header>
    );
};

export { TodoCounter };