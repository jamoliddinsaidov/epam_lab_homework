import React, { useState, useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { getToken } from './utils/localStorageConfig'

// components
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Nav from './components/Navbar/Nav'

// pages
import SignUp from './pages/Auth/SignUp'
import SignIn from './pages/Auth/SignIn'
import ForgotPassword from './pages/Auth/ForgotPassword'
import Profile from './pages/Profile/Profile'
import ChangePassword from './pages/Auth/ChangePassword'
import CreateTruck from './pages/Truck/CreateTruck'
import TruckList from './pages/Truck/TruckList'

// styles
import './App.css'

const App = () => {
	const pathname = useLocation().pathname
	const [isSignedIn, setIsSignedIn] = useState(false)

	useEffect(() => {
		if (getToken()) setIsSignedIn(true)
		else setIsSignedIn(false)
	}, [pathname])

	return (
		<div className='app'>
			{isSignedIn && <Nav />}
			<Switch>
				<Route path='/signup' component={SignUp} />
				<Route path='/signin' component={SignIn} />
				<Route path='/forgotpassword' component={ForgotPassword} />
				<PrivateRoute path='/profile/changepassword' component={ChangePassword} />
				<PrivateRoute path='/trucks/create' component={CreateTruck} />
				<PrivateRoute path='/trucks/list' component={TruckList} />
				<PrivateRoute exact path='/' component={Profile} />
			</Switch>
		</div>
	)
}

export default App
