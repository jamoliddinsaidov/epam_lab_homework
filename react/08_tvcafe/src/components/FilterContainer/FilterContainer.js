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

const FilterContainer = ({ optionHandler }) => {
	return (
		<StyledFilterContainer>
			<div className='selectContainer'>
				<SelectFilter
					list={countryList}
					label='country'
					optionHandler={optionHandler}
				/>
				<SelectFilter
					list={genreList}
					label='genres'
					optionHandler={optionHandler}
				/>
				<SelectFilter
					list={languageList}
					label='language'
					optionHandler={optionHandler}
				/>
				<SelectFilter
					list={ratingList}
					label='rating'
					optionHandler={optionHandler}
				/>
				<SelectFilter
					list={statusList}
					label='status'
					optionHandler={optionHandler}
				/>
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
