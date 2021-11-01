import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { checkIsUserSignedIn } from '../../utils/localStorageConfig'

const PrivateRouteSignedOut = ({ component: Component, ...rest }) => {
  const isSignedIn = checkIsUserSignedIn()

  return (
    <Route
      {...rest}
      render={(props) => {
        return isSignedIn ? <Component {...props} /> : <Redirect to='/signin' />
      }}></Route>
  )
}

export default PrivateRouteSignedOut
