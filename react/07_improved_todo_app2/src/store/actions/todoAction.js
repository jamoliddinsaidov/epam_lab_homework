import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../types'

export const addTodo = ({ id, name, isCompleted, description }) => ({
	type: ADD_TODO,
	payload: {
		id,
		name,
		isCompleted,
		description,
	},
})

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	payload: { id },
})

export const deleteTodo = (index) => ({
	type: DELETE_TODO,
	payload: { index },
})
