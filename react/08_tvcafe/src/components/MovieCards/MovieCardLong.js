import React from 'react'
import styled from 'styled-components'

// utils
import { colors } from '../GlobalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { StyledShortDetails } from './MovieCardShort'
import { truncateSummary } from '../../utils/truncateSummary'

const MovieCardLong = ({ movie }) => {
	const name = movie.name
	const image = movie.image.medium
	const genres = movie.genres
	const rating = movie.rating.average
	const language = movie.language
	const summary = truncateSummary(movie.summary)

	return (
		<>
			<StyledMovieCard>
				<div className='img'>
					<img src={image} alt={name} />
				</div>

				<StyledLongDetails>
					<h4>{name}</h4>
					<p className='gradient-text'>{genres.map((genre) => `${genre} `)}</p>

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
	margin-bottom: 2em;

	.img {
		width: 200px;
		height: 270px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
`

const StyledLongDetails = styled(StyledShortDetails)`
	flex: 1;
	margin-left: 1em;
	margin-right: 2em;
	align-self: flex-start;

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
