import React from 'react';
import { TodoContext } from '../TodoContext';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosErrors } from '../TodosErrors';
import { TodosCreator } from '../TodosCreator';
import { TodoCreateButton } from '../TodoCreateButton';


function AppUI () {
    return (
        /* </React.Fragment> = <> componentes </> */
        <>
    
          <TodoCounter />
          {/* //  completed={completedTodos}
          //  total={totalTodos}
          //  complete={complete} */}
          
    
          <TodoSearch />
          {/* // searchValue={searchValue}
          // setSearchValue={setSearchValue} */}
          
          
          {/* recibe una render function, en los cuales recibimos las props necesarias */}
          <TodoContext.Consumer> 
            {({
              loading,
              error,
              searchedTodos,
              completeTodo,
              deleteTodo,
            }) => (
              <TodoList>

                {loading && <TodosLoading />}
                {error && <TodosErrors />}                          
                
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
            )}          

            {(!error && !loading && searchedTodos.length === 0) && <TodosCreator />}

          </TodoContext.Consumer>
    
          <TodoCreateButton />          
        
        </>
        /* </React.Fragment> */
      );
};

export { AppUI };