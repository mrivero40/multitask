import React from 'react';
import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
import { TodoCreateButton } from './TodoCreateButton.js';

const defaultTodos = [
  { text: 'Ejemplo 1', completed: false },
  { text: 'Ejemplo 2', completed: true },
  { text: 'Ejemplo 3', completed: false },
  { text: 'Ejemplo 4', completed: false },
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={5} total={7} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <TodoCreateButton />
      
    </React.Fragment>
  );
}

export default App;
