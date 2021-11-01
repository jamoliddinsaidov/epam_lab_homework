import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// redux
import { useSelector } from 'react-redux'

// components
import DashboardTitle from '../Titles/DashboardTitle'
import ImageContainer from '../DetailedMovie/ImageContainer'

// utils
import { colors } from '../GlobalStyles'
import { formatWithComma } from '../../utils/formatString'
import { v4 as uuidv4 } from 'uuid'

const SearchedMovies = () => {
  // extracting data
  const { searched, isLoading } = useSelector((state) => state.searchedMovies)

  return (
    <>
      {searched[0] && (
        <StyledSearchedMovies>
          <div className='line'></div>
          <DashboardTitle title='Searched Movies' />
          {!isLoading && searched[0]
            ? searched.map((movie) => (
                <div className='searchedMovie' key={uuidv4()}>
                  <StyledContainerForImage>
                    <ImageContainer source={movie.show.image ? movie.show.image.medium : ''} name={movie.show.name} />
                  </StyledContainerForImage>

                  <div className='details'>
                    <p>
                      <Link to={`shows/${movie.show.id}`}>{movie.show.name}</Link>
                    </p>
                    <p className='gradient-text'>{formatWithComma(movie.show.genres)}</p>
                  </div>
                </div>
              ))
            : ''}
        </StyledSearchedMovies>
      )}
    </>
  )
}

const StyledSearchedMovies = styled.div`
  width: 40%;
  margin: 0 auto;
  animation: appear 300ms ease;
  max-height: 50vh;
  overflow-y: scroll;
  overflow-x: hidden;

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

  .searchedMovie {
    width: 100%;
    margin-bottom: 1em;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .details {
    width: 100%;

    p {
      font-weight: 300;
    }

    a {
      font-weight: 800;
      font-size: 1.3rem;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 55%;
  }

  @media screen and (max-width: 924px) {
    width: 75%;
  }

  @media screen and (max-width: 600px) {
    width: 95%;
    max-height: 60vh;
  }
`

const StyledContainerForImage = styled.div`
  width: 100%;
  max-height: 200px;
  overflow: hidden;

  img {
    object-fit: contain;
  }
`

export default SearchedMovies
