import React from 'react'
import { Link } from 'react-router-dom'

// pages

const Todo = ({ todo }) => {
	return (
		<>
			<div>
				<p>{todo.name}</p>
				<Link to={`/todo/view/${todo.id}`}>View</Link>
				<Link to={`/todo/edit/${todo.id}`}>Edit</Link>
				<button>Delete</button>
			</div>
		</>
	)
}

export default Todo
