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
import { colors, Container } from '../../components/GlobalStyles'

const FilterContainer = ({ optionHandler }) => {
  return (
    <StyledFilterContainer>
      <Container>
        <p className='reminder'>You can filter by selecting only one option</p>
        <div className='selectContainer'>
          <SelectFilter list={countryList} label='country' optionHandler={optionHandler} />
          <SelectFilter list={genreList} label='genres' optionHandler={optionHandler} />
          <SelectFilter list={languageList} label='language' optionHandler={optionHandler} />
          <SelectFilter list={ratingList} label='rating' optionHandler={optionHandler} />
          <SelectFilter list={statusList} label='status' optionHandler={optionHandler} />
        </div>
        <Search placeholder='Search movies by name...' />
        <SearchedMovies />
      </Container>
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
    flex-wrap: wrap;
    margin-bottom: 2em;
  }

  p {
    text-align: center;
    margin-bottom: 2em;
    font-weight: 800;
  }

  @media screen and (max-width: 1024px) {
    .selectContainer {
      justify-content: center;
    }
  }

  @media screen and (max-width: 924px) {
    .reminder {
      font-size: 1.3rem;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0 1em 2em;
  }
`

export default FilterContainer
