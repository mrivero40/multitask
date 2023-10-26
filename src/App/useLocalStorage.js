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