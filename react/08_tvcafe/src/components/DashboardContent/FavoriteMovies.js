import React from 'react'
import styled from 'styled-components'

// components
import DashboardMovie from './DashboardMovie'

// utils
import { colors } from '../GlobalStyles'

const FavoriteMovies = ({ favorites }) => {
	return (
		<StyledFavoriteMovie>
			<div className='line'></div>
			<h4>Your Favorite Movies</h4>
			{favorites.map((movie) => (
				<DashboardMovie key={movie.id} movie={movie} />
			))}
		</StyledFavoriteMovie>
	)
}

const StyledFavoriteMovie = styled.div`
	flex: 1;
	background: ${colors.bgNavColor};
	margin-right: 10em;

	h4 {
		margin: 0.8em 0;
		font-weight: 300;
		text-align: center;
	}
`

export default FavoriteMovies
