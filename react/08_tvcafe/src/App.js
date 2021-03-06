import React from 'react'
import { Switch, Route } from 'react-router-dom'

// components
import { GlobalStyles } from './components/GlobalStyles'
import Nav from './components/Nav/Nav'
import PrivateRouteSignedIn from './components/PrivateRoute/PrivateRouteSignedIn'
import PrivateRouteSignedOut from './components/PrivateRoute/PrivateRouteSignedOut'

// pages
import Home from './pages/Home/Home'
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'
import DetailedMovie from './pages/DetailedMovie/DetailedMovie'
import Dashboard from './pages/Dashboard/Dashboard'
import NotFound from './pages/NotFound/NotFound'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Switch>
        <PrivateRouteSignedIn path='/signin' component={SignIn} />
        <PrivateRouteSignedIn path='/signup' component={SignUp} />
        <Route path={['/shows/:id', '/dashboard/shows/:id']} component={DetailedMovie} />
        <PrivateRouteSignedOut path='/dashboard' component={Dashboard} />
        <Route path='/' component={Home} exact />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default App
