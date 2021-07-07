import React from 'react'
import { Switch, Route } from 'react-router-dom'

// components
import Nav from './components/Nav'

// pages
import Home from './pages/Home/Home'
import Create from './pages/Create/Create.container'
import TodoList from './pages/TodoList/TodoList.container'
import NotFound from './pages/NotFound/NotFound'
import DetailedTodo from './pages/DetailedTodo/DetailedTodo.container'

// styles
import { GlobalStyles } from './GlobalStyles'

function App() {
	return (
		<>
			<GlobalStyles />
			<div>
				<Nav />
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/create' component={Create} exact />
					<Route path='/todolist' component={TodoList} exact />
					<Route path='/todo/view/:id' component={DetailedTodo} exact />
					<Route component={NotFound} />
				</Switch>
			</div>
		</>
	)
}

export default App
