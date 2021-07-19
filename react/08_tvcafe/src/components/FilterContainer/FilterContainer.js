import React from 'react'
import styled from 'styled-components'

// components
import SelectFilter from './SelectFilter'
import Search from '../Search/Search'
import SearchedMovies from '../Search/SearchedMovies'

// utils
import { countryList } from './lists/countryList'
import { genreList } from './lists/genreList'
import { languageList } from './lists/languageList'
import { ratingList } from './lists/ratingList'
import { statusList } from './lists/statusList'
import { colors } from '../GlobalStyles'
import { v4 as uuidv4 } from 'uuid'

const FilterContainer = ({ optionHandler }) => {
	// states
	const lists = [countryList, genreList, languageList, ratingList, statusList]
	const labels = ['country', 'genres', 'language', 'rating', 'status']

	return (
		<StyledFilterContainer>
			<p>You can filter by selecting only one option</p>
			<div className='selectContainer'>
				{lists.map((list, index) => (
					<SelectFilter
						key={uuidv4()}
						list={list}
						label={labels[index]}
						optionHandler={optionHandler}
					/>
				))}
			</div>
			<Search placeholder='Search movies by name...' />
			<SearchedMovies />
		</StyledFilterContainer>
	)
}

const StyledFilterContainer = styled.div`
	padding: 0 4em 2em;
	display: flex;
	flex-direction: column;
	background: ${colors.bgNavColor};
	animation: appear 700ms ease-in;

	.selectContainer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2em;
	}

	p {
		text-align: center;
		margin-bottom: 2em;
		font-weight: 800;
	}
`

export default FilterContainer
