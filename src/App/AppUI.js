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
import { TodoForm } from '../TodoForm';
import { Footer } from '../Footer';
import { TodoContext } from '../TodoContext';


function AppUI () {
  
  return (
    
    <TodoContext.Consumer> 
      {({
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
      }) => (
      <>
        <TodoCounter />          
    
        <TodoSearch />        
          
        {/* recibe una render function, en los cuales recibimos las props necesarias */}      
          
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

        {openModal && (
        <Modal>
          <TodoForm />
        </Modal>          
        )}

        <TodoCreateButton />

        <Footer />
      </>
      )}
    </TodoContext.Consumer>    
  );
};

export { AppUI };