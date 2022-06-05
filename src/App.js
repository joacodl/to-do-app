import React, {useState, useReducer} from 'react';
import TodoList from './components/TodoList';
import CompletedLIst from './components/CompletedLIst';
import Button from './UI/Button';

import styles from './App.module.css';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  COMPLETE_TODO: 'complete-todo',
  DELETE_TODO: 'delete-todo'
}

const todoReducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.COMPLETE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete}
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos
  }
}

const newTodo = (inputValue) => {
  return { id: Date.now(), name: inputValue, complete: false }
}

function App() {
  const [todos, dispatchTodo] = useReducer(todoReducer, [])
  const [inputValue, setInputValue] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    dispatchTodo({ type: ACTIONS.ADD_TODO, payload: { name: inputValue}})
    setInputValue('')
  }

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div className={styles.app}>
      <form onSubmit={submitHandler}>
        <input type="text" value={inputValue} onChange={inputHandler} />
        <Button type='submit' className="form_button">&#43;</Button>
      </form>
      <main>
        <TodoList todos={todos} dispatchTodo={dispatchTodo} />
        <CompletedLIst todos={todos} dispatchTodo={dispatchTodo} />
      </main>
    </div>
  );
}

export default App;
