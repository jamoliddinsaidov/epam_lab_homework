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
import EditTruck from './pages/Truck/EditTruck'
import TruckList from './pages/Truck/TruckList'
import CreateLoad from './pages/Load/CreateLoad'
import EditLoad from './pages/Load/EditLoad'
import LoadList from './pages/Load/LoadList'
import ShippingInfo from './pages/Load/ShippingInfo'

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
				<PrivateRoute path='/trucks/edit/:id' component={EditTruck} />
				<PrivateRoute path='/trucks/list' component={TruckList} />
				<PrivateRoute path='/loads/create' component={CreateLoad} />
				<PrivateRoute path='/loads/list' component={LoadList} />
				<PrivateRoute path='/loads/edit/:id' component={EditLoad} />
				<PrivateRoute path='/loads/:id/shipping_info' component={ShippingInfo} />
				<PrivateRoute exact path='/' component={Profile} />
			</Switch>
		</div>
	)
}

export default App
