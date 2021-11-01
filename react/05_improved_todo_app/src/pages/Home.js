import React from 'react'
import { Link } from 'react-router-dom'

// utils
import styled from 'styled-components'
import { Container } from '../GlobalStyles'

const Home = () => {
  return (
    <StyledHome>
      <h1>Welcome!</h1>
      <p>This app helps you to create, delete and edit todos.</p>
      <Link to='/create'>Create yours</Link>
    </StyledHome>
  )
}

const StyledHome = styled(Container)`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    margin-bottom: 1rem;
  }

  p {
    opacity: 0.6;
    margin-bottom: 1.5rem;
  }

  a {
    border: 2px solid #000;
    background: #000;
    color: #fff;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    font-weight: 700;

    &:hover,
    &:focus {
      background: #fff;
      color: #000;
    }
  }
`

export default Home
