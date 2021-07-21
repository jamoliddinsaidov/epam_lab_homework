import React from 'react'
import styled from 'styled-components'

// components
import DashboardMovieList from '../ListComponents/DashboardMovieList'

const DashboardMoviesContainer = ({ user }) => {
	return (
		<StyledDashboardMoviesContainer>
			<DashboardMovieList
				movies={user.movies.favorites}
				title='Your Favorite Movies'
				key={user.id}
			/>
			<DashboardMovieList
				movies={user.movies.recommended}
				title='Recommended Movies'
				key={user.email}
			/>
		</StyledDashboardMoviesContainer>
	)
}

export const StyledDashboardMoviesContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding-bottom: 3em;
	animation: appear 300ms ease;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`

export default DashboardMoviesContainer
