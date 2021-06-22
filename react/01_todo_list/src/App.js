import React, { useState } from 'react'

// components
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

// styles

const arr = ['first', 'second', 'third', 'fourth']

const App = () => {
	// states
	const [todos, setTodos] = useState([])
	// const [todo, setTodo] = useState()

	return (
		<div className='app'>
			<h1>Todo List</h1>
			<TodoList todos={todos} />
			<TodoForm todos={todos} setTodos={setTodos} />
		</div>
	)
}

export default App
