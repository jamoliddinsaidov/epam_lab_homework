import { GET_TODO } from '../types'

const detailedTodoReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_TODO:
			return action.payload.todos.filter(
				(todo) => todo.id === action.payload.id
			)[0]
		default:
			return state
	}
}

export default detailedTodoReducer
