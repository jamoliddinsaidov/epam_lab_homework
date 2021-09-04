import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { getToken } from './utils/localStorageConfig'
// components
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Nav from './components/Navbar/Nav'

// pages
import SignUp from './pages/Auth/SignUp'
import SignIn from './pages/Auth/SignIn'
import ForgotPassword from './pages/Auth/ForgotPassword'
import Dashboard from './pages/Dashboard/Dashboard'

// styles
import './App.css'

const App = () => {
	const isSignedIn = getToken()

	return (
		<div className='app container-fluid'>
			{isSignedIn && <Nav />}
			<Switch>
				<Route path='/signup' component={SignUp} />
				<Route path='/signin' component={SignIn} />
				<Route path='/forgotpassword' component={ForgotPassword} />
				<PrivateRoute exact path='/' component={Dashboard} />
			</Switch>
		</div>
	)
}

export default App
