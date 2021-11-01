import React, { useState } from 'react'
import styled from 'styled-components'

// utils
import { v4 as uuidv4 } from 'uuid'
import { saveToLocalStorage } from '../utils'

const TodoForm = ({ todos, setTodos }) => {
  // states
  const [inputValue, setInputValue] = useState('')

  // handlers
  const inputHandler = (e) => {
    const value = e.target.value
    setInputValue(value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    // creating a new todo
    const newTodo = {
      id: uuidv4(),
      name: inputValue,
      isCompleted: false,
    }

    // adding the new todo
    setTodos([...todos, newTodo])
    saveToLocalStorage(todos)

    // clearing out the input
    setInputValue('')
  }

  return (
    <StyledTodoForm>
      <input type='text' value={inputValue} onChange={inputHandler} />
      <button type='submit' onClick={submitHandler}>
        +
      </button>
    </StyledTodoForm>
  )
}

const StyledTodoForm = styled.div`
  text-align: center;
  width: 100%;
  margin: 2em 0;

  input,
  button {
    border: 1px solid #fff;
    font-size: 1.2rem;
    padding: 0.5em;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    outline: none;
  }

  input {
    width: 60%;

    &:focus {
      border-color: #c20023;
    }
  }

  button {
    width: 10%;
    font-weight: 800;

    &:focus,
    &:hover {
      background: #fff;
      color: #c20023;
    }
  }
`
export default TodoForm
