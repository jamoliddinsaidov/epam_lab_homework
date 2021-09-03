import React from 'react'

const SignIn = () => {
	return (
		<div class='d-flex flex-column align-items-center justify-content-center sign_in_body'>
			<div class='container my-5 sign_in_container'>
				<h2 class='text-center'>Sign in</h2>

				<form class='my-5 form'>
					<div class='mb-3 input-group'>
						<span class='input-group-text' id='addon'>
							Username
						</span>
						<input type='text' class='form-control' id='usernameInput' />
					</div>

					<div class='mb-3 input-group'>
						<span class='input-group-text' id='addon'>
							Password
						</span>
						<input type='password' class='form-control' id='passwordInput' />
					</div>

					<button type='submit' class='btn btn-primary mb-3'>
						Sign In
					</button>
					<div class='text-small form-alert text-center'></div>
				</form>

				<p class='text-center'>
					Need an account? <a href='/signup'>Sign up</a>
				</p>
			</div>
		</div>
	)
}

export default SignIn
