import React from 'react';

function useLocalStorage(itemName, initialValue) { // custom hook por convención comienzan con "useNombreDelHook"
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {

    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
      
        let parsedItem;
  
        if(!localStorageItem) {
          localStorage.getItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
        }
        
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }, 3000);    
    
  }, []);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  
  return {
    item,
    saveItem,
    loading,
    error,
  };
};

export {  useLocalStorage };

/*const defaultTodos = [
  { text: 'Curso de React.js', completed: false },
  { text: 'Curso Intermedio de TypeScript', completed: false },
  { text: 'Audiocurso de Accesibilidad', completed: true },
  { text: 'Curso Intro Bases de Datos', completed: false },
  { text: 'Curso de React.js 2', completed: false },
  { text: 'Curso Intermedio de TypeScript 2', completed: false },
  { text: 'Audiocurso de Accesibilidad 2', completed: true },
  { text: 'Curso Intro Bases de Datos 2', completed: false },
];
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));*/