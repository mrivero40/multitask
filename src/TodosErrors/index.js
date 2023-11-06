import React from "react";
import './TodosErrors.css';

function TodosErrors() {
    return (
    <>
        <p>ERROR!! En carga de datos.</p>
        <div data-js="astro" className="astronaut">
            <div className="head"></div>
            <div className="arm arm-left"></div>
            <div className="arm arm-right"></div>
            <div className="body">
            <div className="panel"></div>
            </div>
            <div className="leg leg-left"></div>
            <div className="leg leg-right"></div>
            <div className="schoolbag"></div>
            
        </div>        
    </>
    );
};

export { TodosErrors };