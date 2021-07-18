import React from 'react'
import styled from 'styled-components'

// components
import DashboardMovie from '../DashboardContent/SingleContainers/DashboardMovie'
import DashboardTitle from '../Titles/DashboardTitle'

// utils
import { colors } from '../GlobalStyles'
import { v4 as uuidv4 } from 'uuid'

const DashboardMovieList = ({ movies, title }) => {
	return (
		<StyledDashboardMovieList>
			<div className='line'></div>
			<DashboardTitle title={title} />
			{movies.map((movie) => (
				<DashboardMovie key={uuidv4()} movie={movie} />
			))}
		</StyledDashboardMovieList>
	)
}

export const StyledDashboardMovieList = styled.div`
	width: 45%;
	background: ${colors.bgNavColor};
`

export default DashboardMovieList
