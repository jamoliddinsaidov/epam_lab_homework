import React, { useContext } from 'react'
import axios from 'axios'

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  // functions
  const getUser = async (token) => {
    return await axios.get('http://localhost:8080/api/users/me', {
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
  }

  const deleteUser = async (token) => {
    return await axios.delete('http://localhost:8080/api/users/me', {
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
  }

  const changePassword = async (token, oldPassword, newPassword) => {
    return await axios.patch(
      'http://localhost:8080/api/users/me/password',
      { oldPassword, newPassword },
      {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
    )
  }

  const getUserEmail = async (token) => {
    const { data } = await getUser(token)
    return data.user.email
  }

  const getUserEmailById = async (token, id) => {
    return await axios.get(`http://localhost:8080/api/service/users/email/${id}`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
  }

  const getUserRole = async (token) => {
    const { data } = await getUser(token)
    return data.user.role
  }

  const values = {
    getUser,
    deleteUser,
    changePassword,
    getUserEmail,
    getUserRole,
    getUserEmailById,
  }

  return <UserContext.Provider value={values}> {children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
