import React, { useState, useRef } from 'react'
import { useUser } from '../../contexts/UserContext'
import { getToken } from '../../utils/localStorageConfig'

const ChangePassword = () => {
	const oldPasswordRef = useRef(null)
	const newPasswordRef = useRef(null)
	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')
	const { changePassword } = useUser()

	const handleSubmit = async (e) => {
		e.preventDefault()

		const oldPassword = oldPasswordRef.current.value
		const newPassword = newPasswordRef.current.value
		const token = getToken()

		try {
			const { data } = await changePassword(token, oldPassword, newPassword)
			setError('')
			setSuccess(data.message)
		} catch (error) {
			setSuccess('')
			setError('Someting went wrong. Please try again.')
		}
	}

	return (
		<div className='d-flex flex-column align-items-center justify-content-center change_password_form'>
			<div className='container mb-5 sign_in_container'>
				<h2 className='text-center'>Change Password</h2>

				<form className='mt-5 mb-3 form' onSubmit={handleSubmit}>
					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							Old password
						</span>
						<input type='text' className='form-control' id='oldPasswordInput' ref={oldPasswordRef} />
					</div>

					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							New password
						</span>
						<input type='text' className='form-control' id='newPasswordInput' ref={newPasswordRef} />
					</div>

					<button type='submit' className='btn btn-primary mb-3'>
						Change
					</button>
					{success && <div className='text-small form-alert text-center text-success'>{success} </div>}
					{error && <div className='text-small form-alert text-center text-danger'>{error}</div>}
				</form>
			</div>
		</div>
	)
}

export default ChangePassword
