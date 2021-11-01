import React, { useState, useRef } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { saveToken } from '../../utils/localStorageConfig'

const SignIn = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const { signin } = useAuth()
  const [error, setError] = useState('')
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    try {
      // login user and save the token
      const { data } = await signin(email, password)
      saveToken(data.jwt_token)
      history.push('/')
    } catch (error) {
      setError('Wrong email or password')
    }
  }

  return (
    <div className='d-flex flex-column align-items-center justify-content-center sign_in_body'>
      <div className='container my-5 sign_in_container'>
        <h2 className='text-center'>Sign in</h2>

        <form className='mt-5 mb-3 form' onSubmit={handleSubmit}>
          <div className='mb-3 input-group'>
            <span className='input-group-text' id='addon'>
              Email
            </span>
            <input type='email' className='form-control' id='usernameInput' ref={emailRef} required />
          </div>

          <div className='mb-3 input-group'>
            <span className='input-group-text' id='addon'>
              Password
            </span>
            <input type='password' className='form-control' id='passwordInput' ref={passwordRef} required />
          </div>

          <button type='submit' className='btn btn-primary mb-3'>
            Sign In
          </button>
          {error && <div className='text-small form-alert text-center text-danger'>{error}</div>}
        </form>

        <p className='text-center'>
          Need an account? <Link to='/signup'>Sign up</Link>
        </p>
        <p className='text-center'>
          <Link to='/forgotpassword'>Forgot your password?</Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
