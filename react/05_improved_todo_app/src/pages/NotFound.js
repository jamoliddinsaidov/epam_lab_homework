import React from 'react'
import { Link } from 'react-router-dom'

// utils
import styled from 'styled-components'
import { Container } from '../GlobalStyles'

const NotFound = () => {
  return (
    <StyledNotFound>
      <h1>404</h1>
      <p>The page you've been looking for isn't found</p>
      <Link to='/'>Go back to Home</Link>
    </StyledNotFound>
  )
}

const StyledNotFound = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;

  h1 {
    font-size: 4rem;
  }

  p {
    font-size: 1.5rem;
    opacity: 0.5;
    margin: 1rem 0;
  }

  a {
    font-size: 2rem;
  }
`

export default NotFound
