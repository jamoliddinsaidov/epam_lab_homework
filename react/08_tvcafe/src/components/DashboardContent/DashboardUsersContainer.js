import React from 'react'
import styled from 'styled-components'

// components
import DashboardUsersList from '../ListComponents/DashboardUsersList'

// utils
import { StyledUserMoviesContainer } from './DashboardMoviesContainer'

const DashboardUsersContainer = ({ users, user, setUser, setUsers }) => {
	const usersOnPlatformExceptCurrent = users.filter((u) => u.id !== user.id)

	return (
		<StyledUsersContainer>
			<DashboardUsersList
				users={user.friends}
				title='Your Friends'
				setUser={setUser}
				setUsers={setUsers}
				isUserFriends={true}
			/>
			<DashboardUsersList
				users={usersOnPlatformExceptCurrent}
				title='People on the Platform'
				setUser={setUser}
				setUsers={setUsers}
			/>
		</StyledUsersContainer>
	)
}

const StyledUsersContainer = styled(StyledUserMoviesContainer)``

export default DashboardUsersContainer
