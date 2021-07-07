import { combineReducers } from 'redux'

// reducers
import todoReducer from './todoReducer'
import countReducer from './countReducer'
import detailedTodoReducer from './detailedTodoReducer'

const rootReducer = combineReducers({
	todos: todoReducer,
	count: countReducer,
	detailedTodo: detailedTodoReducer,
})

export default rootReducer
