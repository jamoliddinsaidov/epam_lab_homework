const noteID = new URLSearchParams(window.location.search).get('noteID')
const noteField = document.querySelector('.note')
const dateField = document.querySelector('.date')
const noteIdField = document.querySelector('.note_id')
const isCompletedField = document.querySelector('.is_completed')
const noteAlert = document.querySelector('.note_warning')
const editBtn = document.querySelector('.edit')
const deleteBtn = document.querySelector('.delete')

// event listeners
window.addEventListener('DOMContentLoaded', async () => {
  try {
    const token = localStorage.getItem('token')
    const { data } = await axios.get(`/api/notes/${noteID}`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    })

    const { note } = data
    const { _id, text, createdDate, completed } = note

    noteField.innerHTML = `<span class="fw-bold">Note:</span> ${text} `
    dateField.innerHTML = `<span class="fw-bold">Created date:</span> ${formatDate(createdDate)}`
    isCompletedField.innerHTML = `<span class="fw-bold">Status: </span> ${completed ? 'Completed' : 'Uncompleted'}`
    noteIdField.innerHTML = `<span class="fw-bold">Note ID:</span> ${_id}`
    editBtn.setAttribute('href', `./edit_note.html?noteID=${_id}`)
  } catch (error) {
    noteAlert.innerText = error
  }
})

deleteBtn.addEventListener('click', async () => {
  try {
    const token = localStorage.getItem('token')
    await axios.delete(`/api/notes/${noteID}`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
    window.location.href = './dashboard.html'
  } catch (error) {
    noteAlert.innerText = error
  }
})

// functions
function formatDate(date) {
  date = new Date(date)
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}
