import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Route, useHistory } from 'react-router-dom'

// components
import Header from '../../components/DashboardContent/Header'
import DashboardMoviesContainer from '../../components/DashboardContent/DashboardMoviesContainer'
import DashboardUsersContainer from '../../components/DashboardContent/DashboardUsersContainer'
import NotificationsContainer from '../../components/DashboardContent/NotificationsContainer'

// utils
import { Container } from '../../components/GlobalStyles'
import {
	checkLocalStorageUsers,
	checkLocalStorageCurrentUser,
} from '../../utils/localStorageConfig'

const Dashboard = () => {
	const users = checkLocalStorageUsers()
	const user = checkLocalStorageCurrentUser()
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
				<DashboardUsersContainer users={users} />
			</Route>
			<Route
				path='/dashboard/notifications'
				component={NotificationsContainer}
			/>
		</StyledDashboard>
	)
}

const StyledDashboard = styled(Container)`
	width: 85%;
`

export default Dashboard
