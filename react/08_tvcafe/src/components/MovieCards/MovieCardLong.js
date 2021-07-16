import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// utils
import { colors } from '../GlobalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { StyledShortDetails } from './MovieCardShort'
import { truncateSummary, formatWithComma } from '../../utils/formatString'

const MovieCardLong = ({ movie }) => {
	const id = movie.id
	const name = movie.name
	const image = movie.image.medium
	const genres = formatWithComma(movie.genres)
	const rating = movie.rating.average
	const language = movie.language
	const summary = truncateSummary(movie.summary)

	return (
		<>
			<StyledMovieCard>
				<div className='img'>
					<img src={image} alt={name} className='img-shadow' />
				</div>

				<StyledLongDetails>
					<h4>
						<Link to={`/shows/${id}`}>{name}</Link>
					</h4>
					<p className='gradient-text'>{genres}</p>

					<div className='rating'>
						<FontAwesomeIcon icon={faStar} />
						<p>{rating}</p>
						<p className='language'>{language}</p>
					</div>

					<p className='description'>{summary}</p>
				</StyledLongDetails>
			</StyledMovieCard>
		</>
	)
}

const StyledMovieCard = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 50%;
	min-height: 270px;
	margin-bottom: 3em;
	animation: fadeIn 700ms ease;

	.img {
		width: 200px;
		height: 270px;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transform: scale(1);
			transition: transform 1000ms ease-in-out;

			&:hover {
				transform: scale(1.1);
			}
		}
	}
`

const StyledLongDetails = styled(StyledShortDetails)`
	flex: 1;
	margin-left: 1em;
	margin-right: 2em;
	align-self: flex-start;

	a {
		font-weight: 700;
		font-size: 1.5rem;

		&:hover {
			color: ${colors.textColor};
			border-bottom: 1px solid ${colors.textColor};
		}
	}

	.rating {
		margin: 0.5em 0;

		p {
			font-weight: 700;
		}

		.language {
			padding: 0.3em;
			border: 1px solid ${colors.bgNavColor};
			border-radius: 5px;
			font-size: 0.9rem;
			font-weight: 400;
		}
	}
`

export default MovieCardLong
