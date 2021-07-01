import React, { useState, useEffect, useRef, useContext } from 'react'

// utils
import { v4 as uuidv4 } from 'uuid'
import { TodoContext } from '../TodoContext'

const Create = () => {
	const { todos, setTodos, setTodoCount } = useContext(TodoContext)

	// states
	const [input, setInput] = useState('')
	const [description, setDescription] = useState('')

	// references
	const inputRef = useRef(null)

	// handler functions
	const inputChangeHandler = (e) => {
		setInput(e.target.value)
	}

	const textareaChangeHandler = (e) => {
		setDescription(e.target.value)
	}

	const createHandler = (e) => {
		e.preventDefault()

		// creating a new todo
		const newTodo = {
			id: uuidv4(),
			name: input,
			isCompleted: false,
			description,
		}

		// adding the new todo
		setTodos([...todos, newTodo])

		// clearing out input areas
		clear()
	}

	const clear = () => {
		setInput('')
		setDescription('')
		inputRef.current.focus()
	}

	useEffect(() => {
		setTodoCount(todos.length)
	}, [todos, setTodoCount])

	return (
		<div>
			<h1>Create todo</h1>

			<form>
				<label htmlFor='todo'>Todo</label>
				<input
					type='text'
					name='todo'
					id='todo'
					value={input}
					onChange={inputChangeHandler}
					ref={inputRef}
					required
				/>
				<label htmlFor='description'>Description</label>
				<textarea
					type='text'
					name='description'
					id='description'
					cols='30'
					rows='5'
					value={description}
					onChange={textareaChangeHandler}
					required></textarea>
				<button type='submit' onClick={createHandler}>
					Create
				</button>
			</form>
		</div>
	)
}

export default Create
