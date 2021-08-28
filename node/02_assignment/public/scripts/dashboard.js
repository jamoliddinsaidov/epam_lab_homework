const notesList = document.querySelector('.notesList')
const countText = document.querySelector('.count')
const dashboardWarning = document.querySelector('.dashboard_warning')

// event listeners
window.addEventListener('DOMContentLoaded', async () => {
	try {
		const token = localStorage.getItem('token')
		const { data } = await axios.get('/api/notes', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			params: { offset: 0, limit: 10 },
		})

		countText.innerText = `Number of notes: ${data.count}`

		const { notes } = data
		// showing notes
		notes.forEach((note, order) => {
			notesList.appendChild(generateNote(note, order))
		})

		// ========= controller selectors ===========
		const checkBtns = document.querySelectorAll('.checkBtn')
		const editBtns = document.querySelectorAll('.editBtn')
		const deleteBtns = document.querySelectorAll('.deleteBtn')

		checkBtns.forEach(async (btn) => {
			btn.addEventListener('click', async (event) => {
				await checkBtnHandler(event, token)
			})
		})

		deleteBtns.forEach(async (btn) => {
			btn.addEventListener('click', async (event) => {
				await deleteBtnHandler(event, token)
			})
		})
	} catch (error) {
		dashboardWarning.style.display = 'block'
		dashboardWarning.innerText = error
	}
})

// functions
function generateNote(note, order) {
	const { _id, text, completed } = note

	// create note container
	const noteDiv = document.createElement('div')
	noteDiv.classList.add(...['d-flex', 'justify-content-between', 'align-items-center'])

	// create note
	const pText = document.createElement('p')
	pText.classList.add(...['fs-5', 'fw-500'])
	pText.innerText = `${order + 1}. ${text}`

	// create controllers container
	const controllers = document.createElement('div')
	controllers.classList.add(...['note_controllers', 'd-flex', 'justify-content-between', 'align-items-center', 'mb-3'])
	controllers.setAttribute('data-id', _id)

	// create check btn
	const checkBtn = document.createElement('button')
	checkBtn.classList.add(...['btn', 'btn-outline-success', 'checkBtn'])
	checkBtn.innerText = completed ? 'Completed' : 'Uncompleted'
	controllers.appendChild(checkBtn)

	// create edit btn
	const editBtn = document.createElement('button')
	editBtn.classList.add(...['btn', 'btn-outline-primary', 'ms-3', 'editBtn'])
	editBtn.innerText = 'Edit'
	controllers.appendChild(editBtn)

	// create delete btn
	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add(...['btn', 'btn-outline-danger', 'ms-3', 'deleteBtn'])
	deleteBtn.innerText = 'Delete'
	controllers.appendChild(deleteBtn)

	noteDiv.appendChild(pText)
	noteDiv.appendChild(controllers)

	return noteDiv
}

async function checkBtnHandler(event, token) {
	try {
		const noteID = event.target.parentElement.getAttribute('data-id')
		await axios.patch(
			`/api/notes/${noteID}`,
			{},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)
		location.reload()
	} catch (error) {
		console.log(error)
	}
}

async function deleteBtnHandler(event, token) {
	try {
		const noteID = event.target.parentElement.getAttribute('data-id')
		await axios.delete(`/api/notes/${noteID}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		location.reload()
	} catch (error) {
		console.log(error)
	}
}
