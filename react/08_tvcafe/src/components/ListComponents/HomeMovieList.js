import React from 'react'
import styled from 'styled-components'

// utils
import MovieCardLong from '../MovieCards/MovieCardLong'
import { Container } from '../GlobalStyles'

const HomeMovieList = ({ movies, loadMoreHandler }) => {
  return (
    <>
      <StyledHomeMovieList>
        {movies.map((movie) => (
          <MovieCardLong movie={movie} key={movie.id} />
        ))}
      </StyledHomeMovieList>

      <StyledLoadMoreDiv>
        <button onClick={loadMoreHandler} className='gradient-container'>
          Load More
        </button>
      </StyledLoadMoreDiv>
    </>
  )
}

const StyledHomeMovieList = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2em;

  @media screen and (max-width: 924px) {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }
`
const StyledLoadMoreDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
  margin-bottom: 2em;

  .gradient-container {
    padding: 0.8em 1em;
  }
`

export default HomeMovieList
