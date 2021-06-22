import React from 'react'

const Todo = ({ todo, todos, setTodos }) => {
	// handlers
	const deleteBtnHandler = () => {
		// finding which todo is clicked
		const id = todo.id
		const currentIndex = todos.findIndex((element) => (element.id = id))

		// deleting the todo
		todos.splice(currentIndex, 1)
		setTodos([...todos])
	}

	return (
		<div>
			<p>{todo.name}</p>
			<button onClick={deleteBtnHandler}>Delete</button>
		</div>
	)
}

export default Todo
