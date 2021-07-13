import React from 'react'
import styled from 'styled-components'

// utils
import { colors } from '../GlobalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTv } from '@fortawesome/free-solid-svg-icons'

const MovieCardShort = ({ movie }) => {
	const name = movie._embedded.show.name
	const image = movie._embedded.show.image.medium
	const episode = movie.name
	const genres = movie._embedded.show.genres
	return (
		<>
			<StyledMovieCard>
				<div className='img'>
					<img src={image} alt={name} />
				</div>
				<StyledShortDetails>
					<h4>{name}</h4>
					<p className='gradient-text'>{genres.map((genre) => `${genre} `)}</p>
					<div className='episode'>
						<FontAwesomeIcon icon={faTv} />
						<p>{episode}</p>
					</div>
				</StyledShortDetails>
			</StyledMovieCard>
		</>
	)
}

export const StyledMovieCard = styled.div`
	width: 250px;
	min-height: 400px;
	margin: 0 0.5em;

	.img {
		height: 350px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			box-shadow: 0 0 10px 2px ${colors.bgNavColor};
		}
	}
`

export const StyledShortDetails = styled.div`
	margin-top: 0.5em;

	h4 {
		font-weight: 700;
		line-height: 120%;
	}

	p {
		font-weight: 300;
		line-height: 150%;
	}

	.rating,
	.episode {
		display: flex;
		align-items: baseline;
		margin-top: 0.5em;

		svg path {
			color: ${colors.primaryColorThree};
		}

		p {
			margin-left: 6px;
			font-weight: 700;
			line-height: 120%;
		}
	}
`

export default MovieCardShort
