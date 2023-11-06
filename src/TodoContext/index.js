import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
    
      const [searchValue, setSearchValue] = React.useState('');

      const [openModal, setOpenModal] = React.useState(true);
      
      const completedTodos = todos.filter(
        todo => !!todo.completed
      ).length;
      const totalTodos = todos.length;      
    
      const searchedTodos = todos.filter(
        todo => {
          const textTodo = todo.text.toLowerCase();
          const textSearch = searchValue.toLowerCase();
          return textTodo.includes(textSearch);
        }
      );
    
      const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          todo => todo.text === text
        );
        if(newTodos[todoIndex].completed === false) {
          newTodos[todoIndex].completed = true;
        } else {
          newTodos[todoIndex].completed = false;
        };
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          todo => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };
    
        const complete = todos.length === todos.filter(
            todo => !!todo.completed
        ).length;

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            complete,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    );
};

{/* <TodoContext.Provider></TodoContext.Provider>
<TodoContext.Consumer></TodoContext.Consumer> */}

export { TodoContext, TodoProvider };