import React from 'react'
import Todo from './Todo'

import './Lists.css'


const TodoList = ({todos, dispatchTodo}) => {
  return (
    <>
      <div className='list'>
        <h2>To Do Tasks</h2>
        <div className="cards_container">
          {todos.map(todo => 
            !todo.complete && <Todo key={todo.id} todo={todo} position={todos.indexOf(todo)+1} dispatchTodo={dispatchTodo} /> 
          )}
        </div>
      </div>
    </>
  )
}

export default TodoList
