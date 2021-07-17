import React from 'react'
import styled from 'styled-components'

// components
import Header from '../../components/DashboardContent/Header'

// utils
import { Container } from '../../components/GlobalStyles'
import { checkLocalStorageCurrentUser } from '../../utils/localStorageConfig'

const Dashboard = () => {
	const user = checkLocalStorageCurrentUser()

	return (
		<StyledDashboard>
			<Header user={user} />

			<div>
				<div className='favorites'></div>
				<div className='recommended'></div>
			</div>
		</StyledDashboard>
	)
}

const StyledDashboard = styled(Container)`
	width: 85%;
`

export default Dashboard
