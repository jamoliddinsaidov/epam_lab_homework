import React from 'react'
import styled from 'styled-components'

// utils
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Container, colors } from '../GlobalStyles'

const Search = ({ placeholder }) => {
	return (
		<StyledSearch>
			<input
				type='text'
				required
				name='searchMovieInput'
				placeholder={placeholder}
			/>
			<button>
				<FontAwesomeIcon icon={faSearch} />
			</button>
		</StyledSearch>
	)
}

const StyledSearch = styled(Container)`
	display: flex;
	justify-content: center;
	margin: 1.5em auto;

	input {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		width: 60%;
	}

	button {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		border-left: none;

		&:hover,
		&:focus {
			background: transparent;
			border-color: ${colors.textColor};
		}
	}
`

export default Search
