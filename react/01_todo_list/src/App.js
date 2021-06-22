import React, { useState } from 'react'

// components
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

// styles
import { GlobalStyles } from './components/GlobalStyles'

// utils
import { checkLocalStorage } from './utils'

const App = () => {
	// states
	const [todos, setTodos] = useState(checkLocalStorage())

	return (
		<>
			<GlobalStyles />
			<div className='app'>
				<Header name={'Todo List'} />
				<TodoForm todos={todos} setTodos={setTodos} />
				<TodoList todos={todos} setTodos={setTodos} />
			</div>
		</>
	)
}

export default App
