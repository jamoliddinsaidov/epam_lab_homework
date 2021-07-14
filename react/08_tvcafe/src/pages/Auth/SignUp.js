import React from 'react'
import { Link } from 'react-router-dom'

// utils
import HeaderTitle from '../../components/Titles/HeaderTitle'
import {
	StyledSignIn,
	StyledFormContainer,
	StyledForm,
	StyledFormLinks,
} from './SignIn'

const SignUp = () => {
	return (
		<StyledSignIn>
			<div className='line'></div>
			<HeaderTitle title='Sign Up' />

			<StyledFormContainer>
				<StyledForm>
					<input type='text' placeholder='Name' required />
					<input type='email' placeholder='Email' required />
					<input type='password' placeholder='Password' required />
					<button type='submit' className='gradient-container'>
						Sign In
					</button>
				</StyledForm>

				<StyledFormLinks>
					<p>
						Already have an account? <Link to='/signup'>Sign In!</Link>
					</p>
				</StyledFormLinks>
			</StyledFormContainer>
		</StyledSignIn>
	)
}

export default SignUp
