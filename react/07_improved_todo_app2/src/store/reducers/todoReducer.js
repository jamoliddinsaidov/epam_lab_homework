// types
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO } from '../types'

// utils
import { checkLocalStorage } from '../../utils'
const initState = checkLocalStorage()

const todoReducer = (state = initState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					id: action.payload.id,
					name: action.payload.name,
					description: action.payload.description,
					isCompleted: action.payload.isCompleted,
				},
			]
		case TOGGLE_TODO:
			return state.map((todo) =>
				todo.id === action.payload.id
					? { ...todo, isCompleted: !todo.isCompleted }
					: todo
			)
		case DELETE_TODO:
			state.splice(action.payload.index, 1)
			return state
		case EDIT_TODO:
			return state.map((todo) =>
				todo.id === action.payload.id
					? {
							...todo,
							name: action.payload.editedTodo.name,
							description: action.payload.editedTodo.description,
							isCompleted: action.payload.editedTodo.isCompleted,
					  }
					: todo
			)
		default:
			return state
	}
}

export default todoReducer
