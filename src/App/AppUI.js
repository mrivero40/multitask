import React from 'react';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosErrors } from '../TodosErrors';
import { TodosCreator } from '../TodosCreator';
import { TodoCreateButton } from '../TodoCreateButton';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';


function AppUI () {
  // const {
  //   loading,
  //   error,
  //   searchedTodos,
  //   completeTodo,
  //   deleteTodo,
  // } = React.useContext(TodoContext);
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
          openModal,
          setOpenModal,
          toggleTodo,
        }) => (
          <>
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
              {(!error && !loading && searchedTodos.length === 0) && <TodosCreator />}
            </TodoList>
              
            <TodoCreateButton />

            {openModal && (
            <Modal>
              <span>Crear Tarea !!</span>
              <input placeholder="Ingresa la tarea"></input>
              <button
              >crear</button>
              <button
                onClick={toggleTodo}
              >close</button>
            </Modal>
            )}
          </>
        )}        
      
      </TodoContext.Consumer>
    </>
        /* </React.Fragment> */
  );
};

export { AppUI };