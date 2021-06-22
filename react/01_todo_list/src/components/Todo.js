import React from 'react'
import styled from 'styled-components'

// utils
import { saveToLocalStorage } from '../utils'

const Todo = ({ todo, todos, setTodos }) => {
	// handler functions
	const findCurrentIndex = () => {
		const id = todo.id
		const currentIndex = todos.findIndex((element) => element.id === id)

		return currentIndex
	}

	const deleteBtnHandler = () => {
		// finding the index of which todo is clicked
		const currentIndex = findCurrentIndex()

		// deleting the todo
		todos.splice(currentIndex, 1)
		setTodos([...todos])
		saveToLocalStorage(todos)
	}

	const completeHandler = () => {
		// finding the index of which todo is clicked
		const currentIndex = findCurrentIndex()

		// updating the todo
		const currentTodo = todos[currentIndex]
		if (currentTodo) {
			const updatedTodo = {
				...currentTodo,
				isCompleted: !currentTodo.isCompleted,
			}

			todos[currentIndex] = updatedTodo
			setTodos([...todos])
			saveToLocalStorage(todos)
		}
	}

	return (
		<StyledTodo onClick={completeHandler}>
			<p className={`${todo.isCompleted ? 'completed' : ''}`}>{todo.name}</p>
			<button onClick={deleteBtnHandler}>X</button>
		</StyledTodo>
	)
}

const StyledTodo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1.5em;	
	padding: 0.2em 1em;
	border-bottom: 2px solid rgba(255, 255, 255, 0.3);
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover{
		border-bottom: 2px solid rgba(255, 255, 255, 1);
	}

	p,
	button {
		font-size: 1.2rem;
		font-weight: 600;		
		transition: all 0.3s ease-in-out;
	}

	p {
		opacity: 1;
		text-decoration: none;
	}

	p.completed {
		text-decoration: line-through;
		opacity: 0.5;
	}

	button {
		font-size: 0.9rem;
		font-weight: 800;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 0.2em;
		padding: 0.1em 0.5em;
		cursor: pointer;
		outline: none;

		&:hover,
		&:focus {
			border: 2px solid rgba(255, 255, 255, 1);
		}
	}
`

export default Todo
