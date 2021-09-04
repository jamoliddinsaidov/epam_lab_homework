import React from 'react'
import { Switch, Route } from 'react-router-dom'

// components
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'

// pages
import SignUp from './pages/Auth/SignUp'
import SignIn from './pages/Auth/SignIn'
import ForgotPassword from './pages/Auth/ForgotPassword'

// contexts
import { AuthProvider } from './contexts/AuthContext'

// styles
import './App.css'

const App = () => {
	return (
		<div className='app container-fluid'>
			<AuthProvider>
				<Switch>
					<Route path='/signup' component={SignUp} />
					<Route path='/signin' component={SignIn} />
					<Route path='/forgotpassword' component={ForgotPassword} />
					{/* <PrivateRoute exact path='/' component={Dashboard}/> */}
				</Switch>
			</AuthProvider>
		</div>
	)
}

export default App
