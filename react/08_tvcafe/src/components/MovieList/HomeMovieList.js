import React from 'react'
import styled from 'styled-components'

// utils
import MovieCardLong from '../MovieCards/MovieCardLong'
import { Container } from '../GlobalStyles'

const HomeMovieList = () => {
	const numbers = [1, 2, 3, 4, 5, 6]
	return (
		<StyledHomeMovieList>
			{numbers.map((number) => (
				<MovieCardLong number={number} key={number} />
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
