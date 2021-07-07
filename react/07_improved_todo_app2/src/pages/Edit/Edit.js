import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

// utils
import { editTodoInLocalStorage } from '../../utils'

// styles
import { StyledCreate } from '../Create/Create'

export const Edit = ({ todos, detailedTodo, editTodo }) => {
	// states
	const [input, setInput] = useState(detailedTodo.name)
	const [description, setDescription] = useState(detailedTodo.description)
	const history = useHistory()

	// handler functions
	const inputChangeHandler = (e) => {
		setInput(e.target.value)
	}

	const textareaChangeHandler = (e) => {
		setDescription(e.target.value)
	}

	const updateHandler = (e) => {
		e.preventDefault()

		// creating a new todo
		const newTodo = {
			id: detailedTodo.id,
			name: input,
			isCompleted: false,
			description,
		}

		// adding the new todo
		editTodo(detailedTodo.id, newTodo)
		editTodoInLocalStorage(detailedTodo.id, newTodo)

		// redirecting
		history.push('/todolist')
	}

	return (
		<StyledCreate>
			<h2>Edit todo</h2>

			<form>
				<label htmlFor='todo'>Todo</label>
				<input
					type='text'
					name='todo'
					id='todo'
					value={input}
					onChange={inputChangeHandler}
					placeholder='Type your todo...'
					autoComplete='off'
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
					placeholder='Type todo description...'
					required></textarea>
				<button type='submit' onClick={updateHandler}>
					Update
				</button>
			</form>
		</StyledCreate>
	)
}
