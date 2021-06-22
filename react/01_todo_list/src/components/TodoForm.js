import React, { useState } from 'react'

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
		<form>
			<input type='text' value={inputValue} onChange={inputHandler} />
			<button type='submit' onClick={submitHandler}>
				Add
			</button>
		</form>
	)
}

export default TodoForm
