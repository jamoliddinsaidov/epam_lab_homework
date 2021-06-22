import React, { useState } from 'react'

// components
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

// styles

// utils
import { checkLocalStorage } from './utils'

const App = () => {
	// states
	const [todos, setTodos] = useState(checkLocalStorage())

	return (
		<div className='app'>
			<h1>Todo List</h1>
			<TodoList todos={todos} setTodos={setTodos} />
			<TodoForm todos={todos} setTodos={setTodos} />
		</div>
	)
}

export default App
