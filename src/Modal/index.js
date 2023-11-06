import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="Modal-Container">
            {children}
        </div>,
        document.getElementById("modal")
    );
};

export { Modal };