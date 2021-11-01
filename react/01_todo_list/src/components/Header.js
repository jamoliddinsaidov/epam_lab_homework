import React from 'react'
import styled from 'styled-components'

const Header = ({ name }) => {
  return (
    <StyledHeader>
      <h1>{name}</h1>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
  }
`

export default Header
