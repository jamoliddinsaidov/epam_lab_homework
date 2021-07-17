import React from 'react'
import styled from 'styled-components'

// components
import FavoriteMovies from './FavoriteMovies'

// utils
import { colors } from '../GlobalStyles'

const DashboardMoviesContainer = ({ user }) => {
	return (
		<StyledUserMoviesContainer>
			<FavoriteMovies favorites={user.movies.favorites} className='movieDiv' />
			<div className='recommended movieDiv'></div>
		</StyledUserMoviesContainer>
	)
}

const StyledUserMoviesContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding-bottom: 3em;

	.movieDiv {
		flex: 1;
		background: ${colors.bgNavColor};
	}
`

export default DashboardMoviesContainer
