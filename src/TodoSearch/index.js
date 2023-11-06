import React from 'react';
import "./TodoSearch.css";
import { TodoContext } from '../TodoContext';

function TodoSearch() {    
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext); 
    return (
        <div className="TodoSearch">
            <input
                className="InputSearch"
                placeholder="Buscar"
                value={searchValue}
                onChange={ (event) => {
                    setSearchValue(event.target.value);                                       
                }}
            />
        </div>
    );
};

export { TodoSearch };