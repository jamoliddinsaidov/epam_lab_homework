import React from 'react'
import styled from 'styled-components'

// redux
import { useSelector } from 'react-redux'

// components
import DashboardMovieList from '../ListComponents/DashboardMovieList'

// utils
import { colors } from '../GlobalStyles'

const SearchedMovies = () => {
	// extracting data
	const { searched } = useSelector((state) => state.searchedMovies)

	return (
		<>
			{searched.length > 0 ? (
				<StyledSearchedMovies>
					<div className='line'></div>

					<DashboardMovieList movies={searched} title='Searched Movies' />
				</StyledSearchedMovies>
			) : (
				''
			)}
		</>
	)
}

const StyledSearchedMovies = styled.div`
	.line,
	.searchedMoviesContainer {
		width: 40%;
		margin: 0 auto;
	}

	.searchedMoviesContainer {
		animation: appear 300ms ease;
		max-height: 40vh;
		overflow-y: scroll;

		img {
			object-fit: contain;
		}

		&::-webkit-scrollbar {
			width: 0.4em;
		}

		&::-webkit-scrollbar-track {
			background-color: ${colors.bgNavColor};
		}

		&::-webkit-scrollbar-thumb {
			background-color: ${colors.primaryColorTwo};
		}
	}

	.searchedMovie {
		width: 100%;
	}
`

export default SearchedMovies
