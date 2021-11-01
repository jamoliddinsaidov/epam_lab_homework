import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Route, useHistory } from 'react-router-dom'

// components
import Header from '../../components/DashboardContent/DashboardHeader'
import DashboardMoviesContainer from '../../components/DashboardContent/DashboardMoviesContainer'
import DashboardUsersContainer from '../../components/DashboardContent/DashboardUsersContainer'
import DashboardNotificationsContainer from '../../components/DashboardContent/DashboardNotificationsContainer'

// utils
import { Container } from '../../components/GlobalStyles'
import { checkLocalStorageUsers, checkLocalStorageCurrentUser } from '../../utils/localStorageConfig'

const Dashboard = () => {
  const [users, setUsers] = useState(checkLocalStorageUsers())
  const [user, setUser] = useState(checkLocalStorageCurrentUser())
  const history = useHistory()

  useEffect(() => {
    // setting default route
    if (history.location.pathname === '/dashboard') {
      history.push('/dashboard/movies')
    }
  }, [history])

  return (
    <StyledDashboard>
      <Header user={user} />

      <Route path='/dashboard/movies'>
        <DashboardMoviesContainer user={user} />
      </Route>
      <Route path='/dashboard/friends'>
        <DashboardUsersContainer users={users} user={user} setUser={setUser} setUsers={setUsers} />
      </Route>
      <Route path='/dashboard/notifications' component={DashboardNotificationsContainer} />
    </StyledDashboard>
  )
}

const StyledDashboard = styled(Container)`
  width: 85%;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 924px) {
    width: 95%;
  }
`

export default Dashboard
