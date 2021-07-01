import React, { useContext } from 'react'
import { useParams, useHistory, Redirect } from 'react-router-dom'

// custom hooks
import { useFilter } from '../hooks/useFilter'

// utils
import { TodoContext } from '../TodoContext'
import styled from 'styled-components'
import { Container } from '../GlobalStyles'
import { deleteFromLocalStorage } from '../utils'

const DetailedTodo = () => {
	const { id } = useParams()
	const { todos, setTodos, setTodoCount } = useContext(TodoContext)
	const history = useHistory()
	const todo = useFilter(id, todos, history)

	// handler functions
	const deleteHandler = () => {
		let index = todos.findIndex((t) => t.id === todo.id)

		// removing the clicked todo
		todos.splice(index, 1)
		setTodos([...todos])
		deleteFromLocalStorage(index)

		// decreasing the count
		setTodoCount((prev) => prev - 1)

		// redirecting
		history.push('/todolist')
	}
	return (
		<StyledDetailedTodo>
			{todo && (
				<div>
					<h2>{todo.name}</h2>
					<p className='completed'>Completed: {`${todo.isCompleted}`}</p>
					<p>{todo.description}</p>
					<button onClick={deleteHandler}>Delete</button>
				</div>
			)}
		</StyledDetailedTodo>
	)
}

const StyledDetailedTodo = styled(Container)`
	h2,
	p {
		line-height: 150%;
		margin-bottom: 0.2rem;
	}

	.completed {
		opacity: 0.5;
		font-size: 1rem;
	}

	button {
		border: 1px solid #000;
		padding: 0.5rem 1.5rem;
		font-size: 1rem;
		background: #fff;
		color: #000;
		cursor: pointer;
		margin-top: 1rem;

		&:hover,
		&:focus {
			background: #000;
			color: #fff;
		}
	}
`

export default DetailedTodo
