import "./TodoCreateButton.css";

function TodoCreateButton() {
    return (
        <button
        className="button-create"
        onClick={
            (event) => {
                console.log('click');
                console.log(event);
                console.log(event.target);
            } }
        >+</button>
    );
};

export { TodoCreateButton };