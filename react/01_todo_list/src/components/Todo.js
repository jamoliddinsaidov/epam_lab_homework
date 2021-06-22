import React from 'react'

const Todo = ({ todo }) => {
	return (
		<div>
			<p>{todo}</p>
			<button>Delete</button>
		</div>
	)
}

export default Todo
