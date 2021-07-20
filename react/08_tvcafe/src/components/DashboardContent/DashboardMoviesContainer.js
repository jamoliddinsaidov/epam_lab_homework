import React from 'react'
import styled from 'styled-components'

// components
import DashboardMovieList from '../ListComponents/DashboardMovieList'

const DashboardMoviesContainer = ({ user }) => {
	return (
		<StyledUserMoviesContainer>
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
		</StyledUserMoviesContainer>
	)
}

export const StyledUserMoviesContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding-bottom: 3em;
	animation: appear 300ms ease;
`

export default DashboardMoviesContainer
