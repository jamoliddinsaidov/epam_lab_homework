import React from 'react'
import styled from 'styled-components'

// components
import Header from '../../components/DashboardContent/Header'
import DashboardMoviesContainer from '../../components/DashboardContent/DashboardMoviesContainer'

// utils
import { Container } from '../../components/GlobalStyles'
import { checkLocalStorageCurrentUser } from '../../utils/localStorageConfig'

const Dashboard = () => {
	const user = checkLocalStorageCurrentUser()

	return (
		<StyledDashboard>
			<Header user={user} />
			<DashboardMoviesContainer user={user} />
		</StyledDashboard>
	)
}

const StyledDashboard = styled(Container)`
	width: 85%;
`

export default Dashboard
