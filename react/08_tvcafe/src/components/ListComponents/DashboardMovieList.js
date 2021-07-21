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

	@media screen and (max-width: 1024px) {
		width: 48%;
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

export default DashboardMovieList
