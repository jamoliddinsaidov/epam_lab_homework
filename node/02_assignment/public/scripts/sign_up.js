const formDOM = document.querySelector('.form')
const usernameInput = document.querySelector('#usernameInput')
const passwordInput = document.querySelector('#passwordInput')
const formAlert = document.querySelector('.form-alert')

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault()

  const username = usernameInput.value
  const password = passwordInput.value

  try {
    const { data } = await axios.post('/api/auth/register', { username, password })

    let message = data.message + ' <p>Now go <a href="./index.html">here</a> to sign in'
    formAlert.classList.add('text-success')
    formAlert.innerHTML = message
  } catch (error) {
    formAlert.classList.remove('text-success')
    formAlert.classList.add('text-danger')
    formAlert.textContent = 'Something went wrong, please try again later'
  }
})
