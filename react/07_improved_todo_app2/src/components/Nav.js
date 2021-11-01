import React from 'react'
import { NavLink } from 'react-router-dom'

// utils
import styled from 'styled-components'
import { Container } from '../GlobalStyles'

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to='/' exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/create'>Create</NavLink>
        </li>
        <li>
          <NavLink to='/todolist'>TodoList</NavLink>
        </li>
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled(Container)`
  ul {
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    a {
      padding: 0 0.5rem;
    }
  }
`

export default Nav
