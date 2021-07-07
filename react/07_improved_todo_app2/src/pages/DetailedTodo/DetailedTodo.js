import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

// utils
import validate from 'uuid-validate'
import styled from 'styled-components'
import { Container } from '../../GlobalStyles'
import { deleteFromLocalStorage } from '../../utils'

export const DetailedTodo = ({
	detailedTodo,
	todos,
	getTodo,
	deleteTodo,
	decreaseCount,
}) => {
	// params
	const { id } = useParams()
	const history = useHistory()
	const isExist = validate(id)

	useEffect(() => {
		if (isExist) {
			getTodo(id, todos)
		} else {
			history.push('/todoNotFound')
		}
	}, [id, todos, getTodo, history, isExist])

	// handler functions
	const deleteHandler = () => {
		let index = todos.findIndex((t) => t.id === detailedTodo.id)

		// deleteting the todo
		deleteTodo(index)
		deleteFromLocalStorage(index)
		decreaseCount()

		// redirecting
		history.push('/todolist')
	}

	const editHandler = () => {
		history.push(`/todo/edit/${id}`)
	}

	return (
		<StyledDetailedTodo>
			{detailedTodo && (
				<div>
					<h2>{detailedTodo.name}</h2>
					<p className='completed'>
						{detailedTodo.isCompleted ? 'Completed' : 'Not completed'}
					</p>
					<p>{detailedTodo.description}</p>
					<button onClick={editHandler}>Edit</button>
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
		margin-right: 0.5rem;

		&:hover,
		&:focus {
			background: #000;
			color: #fff;
		}
	}
`
