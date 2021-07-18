import React from 'react'
import styled from 'styled-components'

// components
import DashboardTitle from '../Titles/DashboardTitle'
import DashboardUser from '../DashboardContent/SingleContainers/DashboardUser'

// utils
import { StyledDashboardMovieList } from './DashboardMovieList'
import { v4 as uuidv4 } from 'uuid'

const DashboardUsersList = ({
	users,
	title,
	setUser,
	setUsers,
	isUserFriends,
}) => {
	return (
		<StyledDashboardUsersList>
			<div className='line'></div>
			<DashboardTitle title={title} />
			{users?.map((user) => {
				return (
					<DashboardUser
						user={user}
						key={uuidv4()}
						setUser={setUser}
						setUsers={setUsers}
						isUserFriends={isUserFriends}
					/>
				)
			})}
		</StyledDashboardUsersList>
	)
}

export const StyledDashboardUsersList = styled(StyledDashboardMovieList)`
	width: 40%;
`

export default DashboardUsersList
