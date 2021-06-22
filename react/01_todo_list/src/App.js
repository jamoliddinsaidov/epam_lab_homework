import React, { useState } from 'react'

// components
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

// styles

const App = () => {
	// states
	const [todos, setTodos] = useState([])

	return (
		<div className='app'>
			<h1>Todo List</h1>
			<TodoList todos={todos} setTodos={setTodos} />
			<TodoForm todos={todos} setTodos={setTodos} />
		</div>
	)
}

export default App
