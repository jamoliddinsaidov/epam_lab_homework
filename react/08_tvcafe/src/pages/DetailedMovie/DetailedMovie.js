import React, { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import styled from 'styled-components'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { LoadMovieById } from '../../store/actions/detailedMovieAction'

// components
import HeaderTitle from '../../components/Titles/HeaderTitle'

// utils
import { colors, Container } from '../../components/GlobalStyles'
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

const DetailedMovie = () => {
	const { id } = useParams()
	const location = useLocation()

	// fetching data
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(LoadMovieById(id))
	}, [dispatch, id, location])

	const { details, isLoading } = useSelector((state) => state.detailedMovie)

	const image = details.image.original
	const summary = formatSummary(details.summary)
	const country = details.network?.country.name
	const rating = details.rating.average
	const genres = formatWithComma(details.genres)

	return (
		<div>
			{!isLoading ? (
				<StyledDetailedMovieContainer>
					<HeaderTitle title={details.name} />

					<StyledDetails>
						<div className='img'>
							<img src={image} alt={details.name} className='img-shadow' />
						</div>
						<div className='description'>
							<p className='summary'>{summary}</p>
							<p>
								<FontAwesomeIcon icon={faStar} /> Rating: {rating}
							</p>
							<p>
								<FontAwesomeIcon icon={faGlobe} /> Country: {country}
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
								<FontAwesomeIcon icon={faLanguage} /> Language:{' '}
								{details.language}
							</p>
							<p>
								<FontAwesomeIcon icon={faShapes} /> Genres: {genres}
							</p>
							<p>
								<FontAwesomeIcon icon={faFilm} /> Premeried on{' '}
								{details.premiered}
							</p>
							<button className='gradient-container'>Add to favorites</button>
						</div>
					</StyledDetails>
				</StyledDetailedMovieContainer>
			) : (
				''
			)}
		</div>
	)
}

const StyledDetailedMovieContainer = styled(Container)`
	width: 80%;
	margin: 2em auto;
`

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

export default DetailedMovie
