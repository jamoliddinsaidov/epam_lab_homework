import React, { useState } from 'react'

const TodoForm = ({ todos, setTodos }) => {
	const [inputValue, setInputValue] = useState('')

	// handlers
	const inputHandler = (e) => {
		const value = e.target.value
		setInputValue(value)
	}

	const submitHandler = (e) => {
		e.preventDefault()
		setTodos([...todos, inputValue])
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
