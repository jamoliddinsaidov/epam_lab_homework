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
			/>
			<DashboardMovieList
				movies={user.movies.recommended}
				title='Recommended Movies'
			/>
		</StyledUserMoviesContainer>
	)
}

export const StyledUserMoviesContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding-bottom: 3em;
`

export default DashboardMoviesContainer
