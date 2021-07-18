import React from 'react'

// utils
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

const MovieDetails = ({ details }) => {
	return (
		<>
			<p className='summary'>{formatSummary(details.summary)}</p>
			<p>
				<FontAwesomeIcon icon={faStar} /> Rating:{' '}
				{details.rating.average ? details.rating.average : 'not available'}
			</p>
			<p>
				<FontAwesomeIcon icon={faGlobe} /> Country:{' '}
				{details.network?.country.name
					? details.network?.country.name
					: 'not available'}
			</p>
			<p>
				{' '}
				<FontAwesomeIcon icon={faPlayCircle} /> Type:{' '}
				{details.type ? details.type : 'not available'}
			</p>
			<p>
				<FontAwesomeIcon icon={faQuestionCircle} /> Status:{' '}
				{details.status ? details.status : 'not available'}
			</p>
			<p>
				<FontAwesomeIcon icon={faClock} /> Runtime:{' '}
				{details.runtime ? `${details.runtime} minutes` : 'not available'}
			</p>
			<p>
				<FontAwesomeIcon icon={faLanguage} /> Language:{' '}
				{details.language ? details.language : 'not available'}
			</p>
			<p>
				<FontAwesomeIcon icon={faShapes} /> Genres:{' '}
				{formatWithComma(details.genres)
					? formatWithComma(details.genres)
					: 'not available'}
			</p>
			<p>
				<FontAwesomeIcon icon={faFilm} />{' '}
				{details.premiered
					? `Premeried on ${details.premiered}`
					: 'Premeried date is not available'}
			</p>
		</>
	)
}

export default MovieDetails
