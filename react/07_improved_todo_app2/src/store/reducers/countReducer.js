//types
import { INCREASE_COUNT, DECREASE_COUNT, GET_COUNT } from '../types'

// utils
import { checkLocalStorage } from '../../utils'
const todos = checkLocalStorage()
const initState = todos.length > 0 ? todos.length : 0

const countReducer = (state = initState, action) => {
	switch (action.type) {
		case INCREASE_COUNT:
			return state + 1
		case DECREASE_COUNT:
			return state - 1
		case GET_COUNT:
		default:
			return state
	}
}

export default countReducer
