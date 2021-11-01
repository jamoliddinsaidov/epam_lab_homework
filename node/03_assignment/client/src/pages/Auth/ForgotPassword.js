import React, { useState, useRef } from 'react'
import { useAuth } from '../../contexts/AuthContext'

const ForgotPassword = () => {
  const emailRef = useRef(null)
  const { forgotPassword } = useAuth()
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    setLoading(true)

    try {
      // login user and save the token
      const { data } = await forgotPassword(email)
      setError('')
      setSuccess(data.message)
    } catch (error) {
      setSuccess('')
      setError('Wrong email or password')
      setLoading(false)
    }
  }

  return (
    <div className='d-flex flex-column align-items-center justify-content-center sign_in_body'>
      <div className='container my-5 sign_in_container'>
        <h2 className='text-center'>Restore you password</h2>

        <form className='mt-5 form' onSubmit={handleSubmit}>
          <div className='mb-3 input-group'>
            <span className='input-group-text' id='addon'>
              Email
            </span>
            <input type='email' className='form-control' id='usernameInput' ref={emailRef} required />
          </div>

          <button type='submit' className='btn btn-primary mb-3' disabled={loading}>
            Submit
          </button>
          {success && (
            <div className='text-small form-alert text-center text-success'>
              {success} <br /> Now go <a href='/signin'>here</a> to sign in
            </div>
          )}
          {error && <div className='text-small form-alert text-center text-danger'>{error}</div>}
        </form>

        <p className='text-center mt-3'>
          Need an account? <a href='/signup'>Sign up</a>
        </p>
      </div>
    </div>
  )
}

export default ForgotPassword
