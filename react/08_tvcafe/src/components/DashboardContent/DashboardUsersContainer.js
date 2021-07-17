import React from 'react'
import styled from 'styled-components'

// components
import DashboardUsersList from '../ListComponents/DashboardUsersList'

// utils
import { StyledUserMoviesContainer } from './DashboardMoviesContainer'

const DashboardUsersContainer = ({ users }) => {
	return (
		<StyledUsersContainer>
			<DashboardUsersList users={users} title='Your Friends' />
			<DashboardUsersList users={users} title='People on the Platform' />
		</StyledUsersContainer>
	)
}

const StyledUsersContainer = styled(StyledUserMoviesContainer)``

export default DashboardUsersContainer
