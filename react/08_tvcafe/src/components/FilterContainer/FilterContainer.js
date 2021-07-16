import React from 'react'
import styled from 'styled-components'

// components
import SelectFilter from './SelectFilter'
import Search from '../Search/Search'

// utils
import { countryList } from './lists/countryList'
import { genreList } from './lists/genreList'
import { languageList } from './lists/languageList'
import { ratingList } from './lists/ratingList'
import { statusList } from './lists/statusList'
import { colors } from '../GlobalStyles'

const FilterContainer = () => {
	return (
		<StyledFilterContainer>
			<div className='selectContainer'>
				<SelectFilter list={countryList} label='Country' />
				<SelectFilter list={genreList} label='Genre' />
				<SelectFilter list={languageList} label='Language' />
				<SelectFilter list={ratingList} label='Rating' />
				<SelectFilter list={statusList} label='Status' />
			</div>
			<Search placeholder='Search movies by name...' />
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
`

export default FilterContainer
