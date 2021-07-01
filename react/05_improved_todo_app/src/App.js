import React, { useState, useMemo } from 'react'
import { Switch, Route } from 'react-router-dom'

// components
import Nav from './components/Nav'

// pages
import Home from './pages/Home'
import Create from './pages/Create'
import TodoList from './pages/TodoList'
import NotFound from './pages/NotFound'
import DetailedTodo from './pages/DetailedTodo'

// utils
import { TodoContext } from './TodoContext'
import { GlobalStyles } from './GlobalStyles'
import { checkLocalStorage } from './utils'

function App() {
	// states
	const [todos, setTodos] = useState(checkLocalStorage())
	const [todoCount, setTodoCount] = useState(todos[0] ? todos.length : 0)

	// context hook
	const todoContextValues = useMemo(
		() => ({ todos, setTodos, todoCount, setTodoCount }),
		[todos, setTodos, todoCount, setTodoCount]
	)

	return (
		<>
			<GlobalStyles />
			<div>
				<Nav />

				<Switch>
					<TodoContext.Provider value={todoContextValues}>
						<Route path='/' component={Home} exact />
						<Route path='/create' component={Create} />
						<Route path='/todolist' component={TodoList} exact />
						<Route path='/todo/view/:id' component={DetailedTodo} exact />
					</TodoContext.Provider>
					<Route component={NotFound} />
				</Switch>
			</div>
		</>
	)
}

export default App
