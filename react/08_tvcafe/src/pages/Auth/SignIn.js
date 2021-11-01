import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'

// utils
import HeaderTitle from '../../components/Titles/HeaderTitle'
import { loginUser, checkIsUserSignedUp } from '../../utils/localStorageConfig'
import { colors } from '../../components/GlobalStyles'

const SignIn = () => {
  // states
  const [values, setValues] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const history = useHistory()
  const isUserSignedUp = checkIsUserSignedUp()

  // handlers
  const changeHandler = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const signinHandler = (e) => {
    e.preventDefault()
    let isSignedIn = loginUser(values)

    if (typeof isSignedIn === 'boolean') {
      history.push('/dashboard')
    } else {
      setError(isSignedIn)
    }
  }

  return (
    <StyledSignIn>
      <div className='line'></div>
      <HeaderTitle title='Sign In' />
      <StyledFormContainer>
        {isUserSignedUp && !error && <p className='success'>Account is created. You can sign in now.</p>}
        {error && <p className='error'>{error}</p>}
        <StyledForm>
          <input type='email' placeholder='Email' required name='email' onChange={changeHandler} value={values.email} />
          <input
            type='password'
            placeholder='Password'
            required
            name='password'
            onChange={changeHandler}
            value={values.password}
          />
          <button type='submit' className='gradient-container' onClick={signinHandler}>
            Sign In
          </button>
        </StyledForm>

        <StyledFormLinks>
          <p>
            Need an account? <Link to='/signup'>Sign Up!</Link>
          </p>
        </StyledFormLinks>
      </StyledFormContainer>
    </StyledSignIn>
  )
}

export const StyledSignIn = styled.div`
  width: 30%;
  margin: 4em auto;
  background: ${colors.bgNavColor};
  animation: appear 1000ms ease;

  h2 {
    font-weight: 600;
    margin-top: 1em;
    font-size: 2rem;
  }

  @media screen and (max-width: 1024px) {
    width: 45%;
  }

  @media screen and (max-width: 924px) {
    width: 55%;
  }

  @media screen and (max-width: 768px) {
    width: 65%;
  }

  @media screen and (max-width: 600px) {
    width: 75%;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
    margin: 2em auto;
  }
`

export const StyledFormContainer = styled.div`
  padding: 0 1.5em 2em;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  input,
  button {
    width: 90%;
    margin: 1em auto;
  }

  input {
    border: none;
    background: ${colors.bgBodyColor};

    &::placeholder {
      font-size: 0.9rem;
    }
  }

  @media screen and (max-width: 480px) {
    input,
    button {
      width: 100%;
    }
  }
`

export const StyledFormLinks = styled.div`
  text-align: center;

  p,
  a {
    margin-top: 1em;
    line-height: 200%;
    font-size: 1rem;
  }

  p {
    color: ${colors.darkTextColor};
  }

  a {
    color: ${colors.primaryColorTwo};
    opacity: 0.8;
    transition: opacity 300ms ease;
    font-size: 1.1rem;

    &:hover,
    &:focus {
      opacity: 1;
    }
  }
`

export default SignIn
