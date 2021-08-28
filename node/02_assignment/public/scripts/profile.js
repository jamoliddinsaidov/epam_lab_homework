const usernameField = document.querySelector('.username')
const date = document.querySelector('.date')
const userId = document.querySelector('.userId')
const profileAlert = document.querySelector('.profile_warning')

window.addEventListener('DOMContentLoaded', async () => {
	try {
		const token = localStorage.getItem('token')
		const { data } = await axios.get('/api/users/me', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})

		const { username, createdDate, _id } = data.user
		usernameField.innerHTML = `<span class="fw-bold">Username:</span> ${username} `
		date.innerHTML = `<span class="fw-bold">Created date:</span> ${formatDate(createdDate)}`
		userId.innerHTML = `<span class="fw-bold">User ID:</span> ${_id}`
	} catch (error) {
		profileAlert.innerText = error
	}
})

function formatDate(date) {
	date = new Date(date)
	const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
	return date.toLocaleDateString('en-US', options)
}
