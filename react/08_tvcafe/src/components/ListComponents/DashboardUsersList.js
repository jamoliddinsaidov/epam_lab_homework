import React from 'react'
import styled from 'styled-components'

// components
import DashboardTitle from '../Titles/DashboardTitle'
import DashboardUser from '../DashboardContent/SingleContainers/DashboardUser'

// utils
import { StyledDashboardMovieList } from './DashboardMovieList'

const DashboardUsersList = ({ users, title }) => {
	return (
		<StyledDashboardUsersList>
			<div className='line'></div>
			<DashboardTitle title={title} />
			{users.map((user) => (
				<DashboardUser user={user} key={user.id} />
			))}
		</StyledDashboardUsersList>
	)
}

const StyledDashboardUsersList = styled(StyledDashboardMovieList)``

export default DashboardUsersList
