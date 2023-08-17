import React from 'react';

import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

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



function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

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

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
