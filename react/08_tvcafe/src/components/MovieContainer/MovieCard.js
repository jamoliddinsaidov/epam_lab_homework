import React from 'react'
import styled from 'styled-components'

const MovieCard = ({ number }) => {
	return (
		<StyledMovieCard>
			<p>Movie Card {number}</p>
		</StyledMovieCard>
	)
}

const StyledMovieCard = styled.div`
	width: 150px;
	height: 200px;
	background: black;
	color: white;
	margin: 0 1rem;
`

export default MovieCard
