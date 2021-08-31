const noteID = new URLSearchParams(window.location.search).get('noteID')
const formDOM = document.querySelector('.edit_form')
const textInput = document.querySelector('#textInput')
const formAlert = document.querySelector('.edit_alert')

window.addEventListener('DOMContentLoaded', async () => {
	try {
		const token = localStorage.getItem('token')
		const { data } = await axios.get(`/api/notes/${noteID}`, {
			headers: {
				Authorization: `JWT ${token}`,
			},
		})

		const { note } = data
		textInput.value = note.text
	} catch (error) {
		formAlert.style.display = 'block'
		formAlert.classList.remove('text-success')
		formAlert.classList.add('text-danger')
		formAlert.innerText = error
	}
})

formDOM.addEventListener('submit', async (e) => {
	e.preventDefault()
	const text = textInput.value

	try {
		const token = localStorage.getItem('token')
		const { data } = await axios.put(
			`/api/notes/${noteID}`,
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
