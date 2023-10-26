// Destructurando props con el nombre de la props.propiedad que queremos utilizar = recibir props y utilizar props.total y props.completed.-
import React from 'react';
import './TodoCounter.css';

function TodoCounter({
    total,
    completed,
    complete,
}) {

    return (
        <header>
            <h1>
                <span>APP</span>-titud
            </h1>            
                            
            {total !== completed && (
                <h2>
                    Completados <span>{completed}</span> de <span>{total}</span> objetivos
                </h2>
            )}

            {(total === 0 && completed === 0) && (
                <h2>
                    Bienvenido!! 😎
                </h2>
            )}

            {(complete && completed > 0) && (
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