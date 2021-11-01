import React from 'react'
import styled from 'styled-components'

//utils
import { Container, colors } from '../GlobalStyles'
import Carousel from 'react-elastic-carousel'

// components
import MovieCardShort from '../MovieCards/MovieCardShort'
import Arrow from './Arrow'

const MovieCarousel = ({ movies }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3, pagination: false },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]

  return (
    <StyledMovieCarousel>
      {movies ? (
        <Carousel breakPoints={breakPoints} renderArrow={Arrow} enableAutoPlay={true} autoPlaySpeed={5000}>
          {movies.map((movie) => (
            <MovieCardShort key={movie.id} movie={movie} />
          ))}
        </Carousel>
      ) : (
        ''
      )}
    </StyledMovieCarousel>
  )
}

const StyledMovieCarousel = styled(Container)`
  margin: 3em auto;

  .arrow {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .rec.rec-dot {
    background-color: ${colors.bgNavColor};
    box-shadow: ${colors.bgBodyColor} 0px 0px 1px 2px;

    &:active,
    &:hover,
    &:hover {
      box-shadow: ${colors.bgNavColor} 0px 0px 1px 2px;
    }
  }

  .rec.rec-dot_active {
    box-shadow: ${colors.bgNavColor} 0px 0px 1px 3px;
  }
`

export default MovieCarousel
