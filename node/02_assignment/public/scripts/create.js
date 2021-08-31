const formDOM = document.querySelector('.create_form')
const textInput = document.querySelector('#textInput')
const formAlert = document.querySelector('.create_alert')

formDOM.addEventListener('submit', async (e) => {
	e.preventDefault()
	const text = textInput.value

	try {
		const token = localStorage.getItem('token')
		const { data } = await axios.post(
			'/api/notes',
			{ text },
			{
				headers: {
					Authorization: `JWT ${token}`,
				},
			}
		)

		formAlert.style.display = 'block'
		formAlert.classList.remove('text-danger')
		formAlert.classList.add('text-success')
		formAlert.innerText = data.message
		textInput.value = ''

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
