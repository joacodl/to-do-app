import React from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import { ACTIONS } from '../App';

const Todo = ({ todo, dispatchTodo }) => {

    const completeHandler = () => {
        dispatchTodo({ type: ACTIONS.COMPLETE_TODO, payload: { id: todo.id }})
    }

    const deleteHandler = () => {
        dispatchTodo({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id }})
    }

  return (
    <Card status="To do" onDelete={deleteHandler}>
        <p>{todo.name}</p>
        <Button onClick={completeHandler}>Done</Button>
    </Card>
  )
}

export default Todo
