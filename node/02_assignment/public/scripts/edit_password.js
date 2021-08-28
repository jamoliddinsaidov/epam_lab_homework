const formDOM = document.querySelector('.passwrod_edit_form')
const oldPasswordInput = document.querySelector('#oldPassword')
const newPasswordInput = document.querySelector('#newPassword')
const formAlert = document.querySelector('.edit_alert')

formDOM.addEventListener('submit', async (e) => {
	e.preventDefault()

	const oldPassword = oldPasswordInput.value
	const newPassword = newPasswordInput.value

	try {
		const token = localStorage.getItem('token')
		const { data } = await axios.patch(
			'/api/users/me',
			{ oldPassword, newPassword },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)

		formAlert.style.display = 'block'
		formAlert.classList.remove('text-danger')
		formAlert.classList.add('text-success')
		formAlert.innerText = data.message
		oldPasswordInput.value = ''
		newPasswordInput.value = ''

		setTimeout(() => {
			formAlert.style.display = 'none'
		}, 2000)
	} catch (error) {
		formAlert.style.display = 'block'
		formAlert.classList.remove('text-success')
		formAlert.classList.add('text-danger')
		formAlert.innerText = error

		setTimeout(() => {
			formAlert.style.display = 'none'
		}, 2000)
	}
})
