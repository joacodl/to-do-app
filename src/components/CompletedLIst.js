import React from 'react'
import CompletedTodo from './CompletedTodo'

import './Lists.css'

const CompletedLIst = ({ todos, dispatchTodo }) => {
    return (
        <>
          <div className='list'>
            <h2>Completed Tasks</h2>
            <div className='cards_container'>
              {todos.map(todo => 
                todo.complete && <CompletedTodo key={todo.id} todo={todo} position={todos.indexOf(todo)+1} dispatchTodo={dispatchTodo} /> 
              )}
            </div>
          </div>
          
        </>
      )
}

export default CompletedLIst