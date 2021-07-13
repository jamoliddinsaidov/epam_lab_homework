import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronRight,
	faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

const Arrow = ({ type, onClick }) => {
	return (
		<div onClick={onClick} className='arrow'>
			<FontAwesomeIcon
				icon={type === 'PREV' ? faChevronLeft : faChevronRight}
				size='2x'
			/>
		</div>
	)
}

export default Arrow
