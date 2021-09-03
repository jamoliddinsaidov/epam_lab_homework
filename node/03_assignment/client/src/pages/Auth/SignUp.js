import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'

const SignUp = () => {
	const emailRef = useRef(null)
	const passwordRef = useRef(null)
	const roleRef = useRef(null)
	const { signup } = useAuth()
	const [success, setSuccess] = useState('')
	const [error, setError] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()

		const email = emailRef.current.value
		const password = passwordRef.current.value
		const role = roleRef.current.value

		try {
			const { data } = await signup(email, password, role)
			setSuccess(data.message)
			setError('')
		} catch (error) {
			setError(error.message)
			setSuccess('')
		}
	}

	return (
		<div className='d-flex flex-column align-items-center justify-content-center sign_in_body'>
			<div className='container my-5 sign_in_container'>
				<h2 className='text-center'>Sign up</h2>

				<form className='form my-5' onSubmit={handleSubmit}>
					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							Email
						</span>
						<input type='email' className='form-control' id='usernameInput' ref={emailRef} />
					</div>

					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							Password
						</span>
						<input type='password' className='form-control' id='passwordInput' ref={passwordRef} />
					</div>

					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							Role
						</span>
						<select className='form-select' aria-label='Default select example' ref={roleRef}>
							<option value='DRIVER'>Driver</option>
							<option value='SHIPPER'>Shipper</option>
						</select>
					</div>

					<button type='submit' className='btn btn-primary mb-3'>
						Sign Up
					</button>

					{success && (
						<div className='text-small form-alert text-center text-success'>
							{success} <br /> Now go <a href='/signin'>here</a> to sign in
						</div>
					)}
					{error && <div className='text-small form-alert text-center text-danger'>{error}</div>}
				</form>

				<p className='text-center'>
					Already have an acoount? <a href='/signin'>Sign in!</a>
				</p>
			</div>
		</div>
	)
}

export default SignUp
