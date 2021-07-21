import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// components
import ImageContainer, {
	StyledImageContainer,
} from '../DetailedMovie/ImageContainer'

// utils
import { colors } from '../GlobalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { formatWithComma } from '../../utils/formatString'

const MovieCardShort = ({ movie }) => {
	const id = movie._embedded.show.id
	const name = movie._embedded.show.name
	const image = movie._embedded.show.image?.original
	const episode = movie.name
	const genres = formatWithComma(movie._embedded.show.genres)

	return (
		<>
			<StyledMovieCard>
				<ImageContainerStyled>
					<ImageContainer source={image} name={name} className='img' />
				</ImageContainerStyled>

				<StyledShortDetails>
					<h4>
						<Link to={`/shows/${id}`}>{name}</Link>
					</h4>
					<p className='gradient-text'>{genres}</p>
					<div className='episode'>
						<FontAwesomeIcon icon={faPlay} />
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

	@media screen and (max-width: 600px) {
		width: 400px;
		min-height: 550px;
	}
`

const ImageContainerStyled = styled(StyledImageContainer)`
	height: 350px;

	@media screen and (max-width: 600px) {
		width: 350px;
		min-height: 500px;
		margin: 0 auto;
	}
`

export const StyledShortDetails = styled.div`
	margin-top: 0.5em;

	h4 {
		margin-bottom: 0.2em;

		a {
			font-weight: 700;
			font-size: 1.5rem;
			line-height: 80%;

			&:hover {
				color: ${colors.textColor};
				border-bottom: 1px solid ${colors.textColor};
			}
		}
	}

	p {
		font-weight: 300;
		line-height: 150%;
	}

	.rating,
	.episode {
		display: flex;
		align-items: center;
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

	.episode {
		p {
			font-weight: 600;
			font-size: 0.8rem;
		}
	}

	@media screen and (max-width: 600px) {
		text-align: center;
		margin-top: 1em;

		h4 a {
			font-size: 2rem;
			line-height: 130%;
		}

		.episode p,
		p {
			font-size: 1.2rem;
		}

		.episode {
			justify-content: center;
		}
	}

	@media screen and (max-width: 480px) {
		h4 a {
			font-size: 1.6rem;
		}

		.episode p,
		p {
			font-size: 1rem;
		}
	}
`

export default MovieCardShort
