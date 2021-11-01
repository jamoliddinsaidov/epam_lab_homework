import React, { useContext, useEffect } from 'react'

// components
import Todo from '../components/Todo'

// utils
import { TodoContext } from '../TodoContext'

// utils
import styled from 'styled-components'
import { Container } from '../GlobalStyles'

const TodoList = () => {
  const { todos, todoCount } = useContext(TodoContext)

  useEffect(() => {
    // scroll up whenever route changes to '/todolist'
    window.scroll(0, 0)
  }, [])

  return (
    <StyledTodoList>
      <div className='todolist__header'>
        <h2>TodoList</h2>
        <p>number of todos: {todoCount}</p>
      </div>
      {todos[0] && (
        <div>
          {todos.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </div>
      )}
    </StyledTodoList>
  )
}

const StyledTodoList = styled(Container)`
  .todolist__header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 2rem;
    p {
      opacity: 0.5;
      font-weight: 500;
      font-size: 0.8;
    }
  }
`

export default TodoList
