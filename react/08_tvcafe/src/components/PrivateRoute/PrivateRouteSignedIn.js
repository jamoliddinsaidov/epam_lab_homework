import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { checkIsUserSignedIn } from '../../utils/localStorageConfig'

const PrivateRouteSignedIn = ({ component: Component, ...rest }) => {
  const isSignedIn = checkIsUserSignedIn()

  return (
    <Route
      {...rest}
      render={(props) => {
        return isSignedIn ? <Redirect to='/' /> : <Component {...props} />
      }}></Route>
  )
}

export default PrivateRouteSignedIn
