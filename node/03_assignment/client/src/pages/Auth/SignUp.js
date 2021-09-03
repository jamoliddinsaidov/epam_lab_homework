import React from 'react'

const SignUp = () => {
	return (
		<div className='d-flex flex-column align-items-center justify-content-center sign_in_body'>
			<div className='container my-5 sign_in_container'>
				<h2 className='text-center'>Sign up</h2>

				<form className='form my-5'>
					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							Username
						</span>
						<input type='text' className='form-control' id='usernameInput' />
					</div>

					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							Password
						</span>
						<input type='password' className='form-control' id='passwordInput' />
					</div>

					<button type='submit' className='btn btn-primary mb-3'>
						Sign Up
					</button>
					<div className='text-small form-alert text-center'></div>
				</form>

				<p className='text-center'>
					Already have an acoount? <a href='/signin'>Sign in!</a>
				</p>
			</div>
		</div>
	)
}

export default SignUp
