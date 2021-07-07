import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO } from '../types'

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

export const editTodo = (id, editedTodo) => ({
	type: EDIT_TODO,
	payload: { id, editedTodo },
})
