import React from 'react'
import Card from '../UI/Card'

import { ACTIONS } from '../App'

const CompletedTodo = ({ todo, dispatchTodo }) => {

    const deleteHandler = () => {
        dispatchTodo({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id }})
    }

  return (
    <Card status="Completed" onDelete={deleteHandler}>
        <p>{todo.name}</p>
    </Card>
  )
}

export default CompletedTodo
