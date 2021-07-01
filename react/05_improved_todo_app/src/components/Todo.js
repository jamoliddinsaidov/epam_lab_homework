import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// utils
import { TodoContext } from '../TodoContext'
import styled from 'styled-components'
import { deleteFromLocalStorage } from '../utils'

const Todo = ({ todo }) => {
	// states
	const { todos, setTodos, setTodoCount } = useContext(TodoContext)

	// handler functions
	const deleteHandler = () => {
		let index = todos.findIndex((t) => t.id === todo.id)

		// removing the clicked todo
		todos.splice(index, 1)
		setTodos([...todos])
		deleteFromLocalStorage(index)

		// decreasing the count
		setTodoCount((prev) => prev - 1)
	}

	return (
		<StyledTodo>
			<p>{todo.name}</p>
			<div>
				<Link to={`/todo/view/${todo.id}`}>View</Link>
				<Link to={`/todo/edit/${todo.id}`}>Edit</Link>
				<button onClick={deleteHandler}>Delete</button>
			</div>
		</StyledTodo>
	)
}

const StyledTodo = styled.div`
	width: 80%;
	margin: 0.5rem auto 0;
	display: flex;
	align-items: baseline;
	justify-content: space-between;

	div {
		width: 30%;
		display: flex;
		align-items: baseline;
		justify-content: space-between;

		a,
		button {
			font-size: 0.9rem;
			display: block;
			border: none;
			border-bottom: 1px solid transparent;
			background: #fff;
			color: #000;
			padding: 0.2rem 0;
			text-align: center;
			padding: 0 0.4rem;
			margin-left: 0.2rem;
			opacity: 0.6;

			&:hover,
			&:focus {
				opacity: 1;
				border-color: #000;
			}
		}
	}
`

export default Todo
