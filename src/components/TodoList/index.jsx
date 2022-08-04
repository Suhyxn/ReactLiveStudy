import React, { useReducer, useRef } from 'react'
import TodoItem from '../TodoItem'
import TodoAdd from '../TodoAdd'
import * as S from './style'
import { TodoReducer } from '../../reducers/todoReducer'

function TodoList() {
  const todoId = useRef(1)
  const [todoData, dispatch] = useReducer(TodoReducer, [])

  const todoAddHandler = (userInput) => {
    dispatch({ type: 'ADD', data: { ...userInput, id: todoId.current } })
    todoId.current += 1
  }
  const todoRemoveHandler = (id) => {
    dispatch({ type: 'REMOVE', data: { id } })
  }
  const todoCheckHandler = (id) => {
    dispatch({ type: 'CHECK', data: { id } })
  }

  return (
    <S.TodoContainer>
      <S.TodoTitle>나만의 TodoList</S.TodoTitle>
      <TodoAdd todoAddHandler={todoAddHandler} />
      {todoData.map((itemData) => {
        return (
          <TodoItem
            itemData={itemData}
            todoCheckHandler={todoCheckHandler}
            todoRemoveHandler={todoRemoveHandler}
          />
        )
      })}
    </S.TodoContainer>
  )
}

export default TodoList
