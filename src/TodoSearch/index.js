import React from 'react';
import "./TodoSearch.css";

function TodoSearch({
    searchValue,
    setSearchValue,
}) {    

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