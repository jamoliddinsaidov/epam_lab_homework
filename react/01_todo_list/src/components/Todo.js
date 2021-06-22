import React from 'react'

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
		const updatedTodo = {
			...currentTodo,
			isCompleted: !currentTodo.isCompleted,
		}

		todos[currentIndex] = updatedTodo
		setTodos([...todos])
		saveToLocalStorage(todos)
	}

	return (
		<div>
			<p onClick={completeHandler}>{todo.name}</p>
			<button onClick={deleteBtnHandler}>Delete</button>
		</div>
	)
}

export default Todo
