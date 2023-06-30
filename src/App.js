import React from 'react';
import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
import { TodoCreateButton } from './TodoCreateButton.js';

const defaultTodos = [
  { text: 'Curso de React.js', completed: false },
  { text: 'Curso Intermedio de TypeScript', completed: false },
  { text: 'Audiocurso de Accesibilidad', completed: true },
  { text: 'Curso Intro Bases de Datos', completed: false },
  { text: 'Curso de React.js 2', completed: false },
  { text: 'Curso Intermedio de TypeScript 2', completed: false },
  { text: 'Audiocurso de Accesibilidad 2', completed: true },
  { text: 'Curso Intro Bases de Datos 2', completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  const [todos, setTodos] = React.useState(defaultTodos);
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
      todo => todo.text == text
    );
    if(newTodos[todoIndex].completed == false) {
      newTodos[todoIndex].completed = true;
    } else {
      newTodos[todoIndex].completed = false;
    };
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>

      <TodoCounter
       completed={completedTodos}
       total={totalTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
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
      
    </React.Fragment>
  );
}

export default App;
