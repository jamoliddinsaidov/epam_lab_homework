import React from 'react'
import styled from 'styled-components'

// components
import MovieCard from './MovieCard'

//utils
import { Container } from '../GlobalStyles'
import Carousel from 'react-elastic-carousel'

const MovieList = ({ number }) => {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	return (
		<StyledMovieList>
			<Carousel>
				{numbers.map((number) => (
					<MovieCard key={number} number={number} />
				))}
			</Carousel>
		</StyledMovieList>
	)
}

const StyledMovieList = styled(Container)`
	display: flex;
	justify-content: space-between;
	margin: 2em auto;
`

export default MovieList
