import "./TodoSearch.css";

function TodoSearch() {
    return (
        <div className="search-container">
            <input
                placeholder="Introduce para buscar"
                onChange={ (event) => {
                    console.log('escribiendo');
                    console.log(event.target);
                    console.log(event.target.value);
                }}
            />
        </div>
    );
};

export { TodoSearch };