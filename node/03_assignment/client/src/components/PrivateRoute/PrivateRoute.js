import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getToken } from '../../utils/localStorageConfig'

const PrivateRoute = ({ component: Component, ...rest }) => {
	const isSignedIn = getToken()

	return (
		<Route
			{...rest}
			render={(props) => {
				return isSignedIn ? <Component {...props} /> : <Redirect to='/signin' />
			}}></Route>
	)
}

export default PrivateRoute
