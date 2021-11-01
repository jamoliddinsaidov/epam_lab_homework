import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

// utils
import HeaderTitle from '../../components/Titles/HeaderTitle'
import { addUserCredentialsToLocalStorage } from '../../utils/localStorageConfig'
import { StyledSignIn, StyledFormContainer, StyledForm, StyledFormLinks } from './SignIn'

const SignUp = () => {
  // states
  const [values, setValues] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const history = useHistory()

  // handlers
  const changeHandler = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const signupHandler = (e) => {
    e.preventDefault()
    const isSignedUp = addUserCredentialsToLocalStorage(values)

    if (typeof isSignedUp === 'boolean') {
      history.push('/signin')
    } else {
      setError(isSignedUp)
    }
  }

  return (
    <StyledSignIn>
      <div className='line'></div>
      <HeaderTitle title='Sign Up' />

      <StyledFormContainer>
        {error && <p className='error'>{error}</p>}
        <StyledForm>
          <input type='text' placeholder='Name' required name='name' onChange={changeHandler} value={values.name} />
          <input type='email' placeholder='Email' required name='email' onChange={changeHandler} value={values.email} />
          <input
            type='password'
            placeholder='Password'
            required
            name='password'
            onChange={changeHandler}
            value={values.password}
          />
          <button type='submit' className='gradient-container' onClick={signupHandler}>
            Sign Up
          </button>
        </StyledForm>

        <StyledFormLinks>
          <p>
            Already have an account? <Link to='/signin'>Sign In!</Link>
          </p>
        </StyledFormLinks>
      </StyledFormContainer>
    </StyledSignIn>
  )
}

export default SignUp
