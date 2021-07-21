import React from 'react'
import styled from 'styled-components'

// components
import DashboardTitle from '../Titles/DashboardTitle'
import DashboardUser from '../DashboardContent/SingleContainers/DashboardUser'

// utils
import { StyledDashboardMovieList } from './DashboardMovieList'
import { colors } from '../GlobalStyles'
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

	@media screen and (max-width: 1024px) {
		width: 45%;
	}

	@media screen and (max-width: 768px) {
		width: 85%;
		margin-bottom: 2em;
		max-height: 70vh;
		overflow-y: scroll;

		&::-webkit-scrollbar {
			width: 0.3em;
		}

		&::-webkit-scrollbar-track {
			background-color: ${colors.bgNavColor};
		}

		&::-webkit-scrollbar-thumb {
			background-color: ${colors.primaryColorTwo};
		}
	}

	@media screen and (max-width: 480px) {
		width: 90%;
		margin-bottom: 4em;
	}
`

export default DashboardUsersList
