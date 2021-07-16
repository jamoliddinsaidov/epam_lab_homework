import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'

// utils
import HeaderTitle from '../../components/Titles/HeaderTitle'
import { loginUser } from '../../utils/localStorageConfig'
import { colors } from '../../components/GlobalStyles'

const SignIn = () => {
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

	const signinHandler = (e) => {
		e.preventDefault()
		let isSignedIn = loginUser(values)

		if (typeof isSignedIn === 'boolean') {
			history.push('/')
		} else {
			setError(isSignedIn)
		}
	}

	return (
		<StyledSignIn>
			<div className='line'></div>
			<HeaderTitle title='Sign In' />

			<StyledFormContainer>
				{error && <p className='error'>{error}</p>}
				<StyledForm>
					<input
						type='email'
						placeholder='Email'
						required
						name='email'
						onChange={changeHandler}
						value={values.email}
					/>
					<input
						type='password'
						placeholder='Password'
						required
						name='password'
						onChange={changeHandler}
						value={values.password}
					/>
					<button
						type='submit'
						className='gradient-container'
						onClick={signinHandler}>
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

	h2 {
		font-weight: 600;
		margin-top: 1em;
		font-size: 2rem;
	}
`

export const StyledFormContainer = styled.div`
	padding: 0 1.5em 2em;

	.error {
		text-align: center;
		color: ${colors.dangerColor};
	}
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
