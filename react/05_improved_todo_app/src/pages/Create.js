import React, { useState, useEffect, useRef, useContext } from 'react'

// utils
import { v4 as uuidv4 } from 'uuid'
import { TodoContext } from '../TodoContext'
import styled from 'styled-components'
import { Container } from '../GlobalStyles'

const Create = () => {
	// states
	const { todos, setTodos, setTodoCount } = useContext(TodoContext)
	const [input, setInput] = useState('')
	const [description, setDescription] = useState('')
	const [isSubmitted, setIsSubmitted] = useState(false)

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
		setIsSubmitted(true)

		// clearing out input areas
		clear()
	}

	const clear = () => {
		setInput('')
		setDescription('')
		inputRef.current.focus()

		setTimeout(() => {
			setIsSubmitted(false)
		}, 2000)
	}

	useEffect(() => {
		setTodoCount(todos.length)
	}, [todos, setTodoCount])

	return (
		<StyledCreate>
			<h2>Create todo</h2>
			<span className='msg'>{isSubmitted ? 'todo has been created' : ''}</span>

			<form>
				<label htmlFor='todo'>Todo</label>
				<input
					type='text'
					name='todo'
					id='todo'
					value={input}
					onChange={inputChangeHandler}
					ref={inputRef}
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
				<button type='submit' onClick={createHandler}>
					Create
				</button>
			</form>
		</StyledCreate>
	)
}

const StyledCreate = styled(Container)`
	.msg {
		opacity: 0.7;
		display: block;
		margin-top: 0.5rem;
	}

	form {
		width: 50%;
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		input,
		textarea,
		button,
		label {
			width: 100%;
			margin-bottom: 0.5rem;
			font-size: 1.2rem;
		}

		input,
		textarea {
			padding: 0.5rem;
			border: 1px solid rgba(0, 0, 0, 0.5);
			outline: none;
			transition: all 0.3s ease-in-out;

			&:focus {
				border-color: rgba(0, 0, 0, 1);
			}

			&::placeholder {
				font-size: 0.9rem;
			}
		}

		button {
			border: 1px solid rgba(0, 0, 0, 0.5);
			background: #fff;
			color: #000;
			font-size: 1.2rem;
			padding: 0.5rem 1rem;
			margin-top: 1rem;
			&:hover,
			&:focus {
				border: 1px solid rgba(0, 0, 0, 1);
			}
		}
	}
`

export default Create
