import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// components
import ImageContainer, { StyledImageContainer } from '../../DetailedMovie/ImageContainer'

// utils
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { colors } from '../../GlobalStyles'

const DashboardMovie = ({ movie }) => {
  return (
    <>
      {movie.image && (
        <StyledDashboardMovie>
          <StyledContainerForImage>
            <ImageContainer source={movie.image} name={movie.name} />
          </StyledContainerForImage>

          <StyledDetailsContainer>
            <p>
              <Link to={`shows/${movie.id || movie.movieId}`}>{movie.name}</Link>
            </p>
            <p className='gradient-text'>{movie.genres}</p>
            {movie.rating && (
              <p>
                <FontAwesomeIcon icon={faStar} />
                {movie.rating}
              </p>
            )}
            {movie.friendName && <p className='friend-recommend'>recommended by {movie.friendName}</p>}
          </StyledDetailsContainer>
        </StyledDashboardMovie>
      )}
    </>
  )
}

const StyledDashboardMovie = styled.div`
  display: flex;
  margin-bottom: 1.5em;
  padding: 0 1em;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3em;
  }
`

const StyledDetailsContainer = styled.div`
  padding: 0 1em;

  p,
  a {
    font-weight: 700;
    line-height: 150%;
  }

  a {
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 0.5px;
  }

  .gradient-text {
    font-weight: 400;
  }

  svg {
    margin-right: 0.3rem;

    path {
      color: ${colors.primaryColorThree};
    }
  }

  .friend-recommend {
    font-weight: 500;
    opacity: 0.8;
  }

  @media screen and (max-width: 1024px) {
    .gradient-text {
      font-size: 0.9rem;
    }
  }

  @media screen and (max-width: 480px) {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 1.2rem;
    }

    p {
      text-align: center;
      margin-bottom: 0.5em;
    }

    .friend-recommend {
      font-size: 0.8rem;
    }
  }
`

const StyledContainerForImage = styled(StyledImageContainer)`
  width: 120px;
  height: 100px;
  border-radius: 2px;

  @media screen and (max-width: 924px) {
    width: 120px;
    height: 140px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 250px;
  }
`

export default DashboardMovie
