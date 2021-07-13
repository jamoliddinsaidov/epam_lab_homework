import React from 'react'
import { Switch, Route } from 'react-router-dom'

// components
import { GlobalStyles } from './components/GlobalStyles'
import Nav from './components/Nav/Nav'

// pages
import Home from './pages/Home/Home'

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Nav />
			<Switch>
				<Route path='/about' />
				<Route path='/dashboard' />
				<Route path='/' component={Home} exact />
			</Switch>
		</>
	)
}

export default App
