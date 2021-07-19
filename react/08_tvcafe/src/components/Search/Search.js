import React from 'react'
import styled from 'styled-components'

// redux
import { useDispatch } from 'react-redux'
import { SearchMovie } from '../../store/actions/searchMovieAction'

// utils
import { Container, colors } from '../GlobalStyles'

const Search = ({ placeholder }) => {
	// fetching data
	const dispatch = useDispatch()

	const inputHandler = (e) => {
		dispatch(SearchMovie(e.target.value))
	}

	return (
		<StyledSearch>
			<input
				type='text'
				required
				name='searchMovieInput'
				placeholder={placeholder}
				onChange={inputHandler}
			/>
		</StyledSearch>
	)
}

const StyledSearch = styled(Container)`
	display: flex;
	justify-content: center;
	margin: 1.5em auto;

	input {
		border-radius: 6px;
		width: 60%;
		padding: 0.5em 1em;
		background: ${colors.bgBodyColor};
		border: 1px solid transparent;
		transition: border-color 300ms ease;

		&:active,
		&:focus {
			border-color: ${colors.textColor};
		}
	}
`

export default Search
