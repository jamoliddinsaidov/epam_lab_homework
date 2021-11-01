import React from 'react'
import styled from 'styled-components'

// components
import DashboardUsersList from '../ListComponents/DashboardUsersList'

// utils
import { StyledDashboardMoviesContainer } from './DashboardMoviesContainer'

const DashboardUsersContainer = ({ users, user, setUser, setUsers }) => {
  const usersOnPlatformExceptCurrent = users.filter((u) => u.id !== user.id)

  return (
    <StyledUsersContainer>
      <DashboardUsersList
        users={user.friends}
        title='Your Friends'
        setUser={setUser}
        setUsers={setUsers}
        isUserFriends={true}
      />
      <DashboardUsersList
        users={usersOnPlatformExceptCurrent}
        title='People on the Platform'
        setUser={setUser}
        setUsers={setUsers}
      />
    </StyledUsersContainer>
  )
}

const StyledUsersContainer = styled(StyledDashboardMoviesContainer)`
  animation: appear 300ms ease;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export default DashboardUsersContainer
