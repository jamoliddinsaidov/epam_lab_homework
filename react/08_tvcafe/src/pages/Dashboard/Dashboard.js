import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Route, useHistory } from 'react-router-dom'

// components
import Header from '../../components/DashboardContent/DashboardHeader'
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
	const [users, setUsers] = useState(checkLocalStorageUsers())
	const [user, setUser] = useState(checkLocalStorageCurrentUser())
	const history = useHistory()

	useEffect(() => {
		// setting default route
		if (history.location.pathname === '/dashboard') {
			history.push('/dashboard/movies')
		}
	}, [history])

	// const updateFollowers = () => {
	// 	// realtime updating friends section
	// 	const updatedUsers = checkLocalStorageUsers()
	// 	const updatedUser = checkLocalStorageCurrentUser()

	// 	setUsers(updatedUsers)
	// 	setUser(updatedUser)
	// }

	return (
		<StyledDashboard>
			<Header user={user} />

			<Route path='/dashboard/movies'>
				<DashboardMoviesContainer user={user} />
			</Route>
			<Route path='/dashboard/friends'>
				<DashboardUsersContainer
					users={users}
					user={user}
					setUser={setUser}
					setUsers={setUsers}
				/>
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
