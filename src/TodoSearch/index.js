import React from 'react';
import "./TodoSearch.css";

function TodoSearch({
    searchValue,
    setSearchValue,
}) {    

    return (
        <div className="search-container">
            <input
                placeholder="Introduce para buscar"
                value={searchValue}
                onChange={ (event) => {
                    setSearchValue(event.target.value);                                       
                }}
            />
        </div>
    );
};

export { TodoSearch };