const notesList = document.querySelector('.notesList')
const countText = document.querySelector('.count')
const dashboardWarning = document.querySelector('.dashboard_warning')
const logoutBtn = document.querySelector('.logout')
const loadMoreBtn = document.querySelector('.load_more_btn')
let loadMoreClicked = 1

// event listeners
window.addEventListener('DOMContentLoaded', async () => {
	try {
		const token = localStorage.getItem('token')
		const { data } = await axios.get('/api/notes', {
			headers: {
				Authorization: `JWT ${token}`,
			},
		})

		countText.innerText = `Number of notes: ${data.count}`

		const { notes } = data
		// showing notes
		notes.forEach((note, order) => {
			notesList.appendChild(generateNote(note, order))
		})

		// ========= controller selectors ===========
		const checkBtns = document.querySelectorAll('.checkBtn')
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

		// enabling loadmore btn
		if (Number(data.count) >= 10) loadMoreBtn.classList.remove('disabled')
	} catch (error) {
		dashboardWarning.style.display = 'block'
		dashboardWarning.innerText = error
	}
})

logoutBtn.addEventListener('click', () => {
	localStorage.removeItem('token')
	window.location.href = '/'
})

loadMoreBtn.addEventListener('click', async () => {
	try {
		const token = localStorage.getItem('token')
		const { data } = await axios.get('/api/notes', {
			headers: {
				Authorization: `JWT ${token}`,
			},
			params: { offset: 10 * loadMoreClicked, limit: 10 * (loadMoreClicked + 1) },
		})

		const { notes } = data
		// showing notes
		notes.forEach((note, order) => {
			notesList.appendChild(generateNote(note, order))
		})

		// if true disable loadmore btn
		if (10 * loadMoreClicked >= notesList.children.length) loadMoreBtn.classList.add('disabled')

		// updating counter
		countText.innerText = `Number of notes: ${notesList.children.length}`
		loadMoreClicked++
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
	const aText = document.createElement('a')
	aText.classList.add(...['fs-5', 'fw-500', 'text-decoration-none', 'text-body'])
	aText.innerText = text
	aText.setAttribute('href', `./note_detail.html?noteID=${_id}`)

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
	const editBtn = document.createElement('a')
	editBtn.classList.add(...['btn', 'btn-outline-primary', 'ms-3', 'editBtn'])
	editBtn.setAttribute('href', `./edit_note.html?noteID=${_id}`)
	editBtn.innerText = 'Edit'
	controllers.appendChild(editBtn)

	// create delete btn
	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add(...['btn', 'btn-outline-danger', 'ms-3', 'deleteBtn'])
	deleteBtn.innerText = 'Delete'
	controllers.appendChild(deleteBtn)

	noteDiv.appendChild(aText)
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
					Authorization: `JWT ${token}`,
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
				Authorization: `JWT ${token}`,
			},
		})
		location.reload()
	} catch (error) {
		console.log(error)
	}
}
