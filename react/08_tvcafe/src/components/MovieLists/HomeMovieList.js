import React from 'react'
import styled from 'styled-components'

// utils
import MovieCardLong from '../MovieCards/MovieCardLong'
import { Container } from '../GlobalStyles'

const HomeMovieList = ({ movies }) => {
	return (
		<StyledHomeMovieList>
			{movies.map((movie) => (
				<MovieCardLong movie={movie} key={movie.id} />
			))}
		</StyledHomeMovieList>
	)
}

const StyledHomeMovieList = styled(Container)`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 2em;
`

export default HomeMovieList
