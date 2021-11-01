import React from 'react'
import styled from 'styled-components'

// components
import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {
  return (
    <StyledTodoList>
      {todos[0] && todos.map((todo, index) => <Todo todo={todo} todos={todos} setTodos={setTodos} key={index} />)}
    </StyledTodoList>
  )
}

const StyledTodoList = styled.div``

export default TodoList
