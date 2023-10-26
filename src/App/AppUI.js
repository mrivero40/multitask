import React from 'react';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoCreateButton } from '../TodoCreateButton';

function AppUI ({
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
}) {
    return (
        /* </React.Fragment> */
        <>
    
          <TodoCounter
           completed={completedTodos}
           total={totalTodos}
           complete={complete}
          />
    
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
    
          <TodoList>

            {loading && <p>Cargando...</p>}
            {error && <p>Error de carga!!</p>}
            {(!loading && searchedTodos.length === 0) && <p>Crea tu primera Tarea!!</p>}            
            
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
    
          <TodoCreateButton />          
        
        </>
        /* </React.Fragment> */
      );
};

export { AppUI };