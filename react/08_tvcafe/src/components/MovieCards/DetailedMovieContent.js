import React from 'react'
import styled from 'styled-components'

// utils
import { colors } from '../../components/GlobalStyles'
import { formatSummary, formatWithComma } from '../../utils/formatString'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faStar,
	faGlobe,
	faLanguage,
	faQuestionCircle,
	faClock,
	faFilm,
	faPlayCircle,
	faShapes,
} from '@fortawesome/free-solid-svg-icons'

const DetailedMovieContent = ({ details }) => {
	return (
		<>
			{details.image?.original && (
				<StyledDetails>
					<div className='img'>
						<img
							src={details.image.original}
							alt={details.name}
							className='img-shadow'
						/>
					</div>
					<div className='description'>
						<p className='summary'>{formatSummary(details.summary)}</p>
						<p>
							<FontAwesomeIcon icon={faStar} /> Rating: {details.rating.average}
						</p>
						<p>
							<FontAwesomeIcon icon={faGlobe} /> Country:{' '}
							{details.network?.country.name}
						</p>
						<p>
							{' '}
							<FontAwesomeIcon icon={faPlayCircle} /> Type: {details.type}
						</p>
						<p>
							<FontAwesomeIcon icon={faQuestionCircle} /> Status:{' '}
							{details.status}
						</p>
						<p>
							<FontAwesomeIcon icon={faClock} /> Runtime: {details.runtime}{' '}
							minutes
						</p>
						<p>
							<FontAwesomeIcon icon={faLanguage} /> Language: {details.language}
						</p>
						<p>
							<FontAwesomeIcon icon={faShapes} /> Genres:{' '}
							{formatWithComma(details.genres)}
						</p>
						<p>
							<FontAwesomeIcon icon={faFilm} /> Premeried on {details.premiered}
						</p>
						<button className='gradient-container'>Add to favorites</button>
					</div>
				</StyledDetails>
			)}
		</>
	)
}

const StyledDetails = styled.div`
	display: flex;

	.img {
		min-width: 400px;
		max-width: 450px;
		height: 500px;
		overflow: hidden;
		margin-right: 2em;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.description {
		p {
			width: 100%;
			line-height: 150%;
			margin-bottom: 0.5em;
			font-weight: 600;

			svg path {
				color: ${colors.primaryColorThree};
			}
		}

		.summary {
			font-weight: 400;
		}
	}

	button {
		padding: 0.6em 0.8em;
		margin-top: 0.5em;
	}
`

export default DetailedMovieContent
