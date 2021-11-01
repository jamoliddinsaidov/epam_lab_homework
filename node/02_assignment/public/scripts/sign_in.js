const formDOM = document.querySelector('.form')
const usernameInput = document.querySelector('#usernameInput')
const passwordInput = document.querySelector('#passwordInput')
const formAlert = document.querySelector('.form-alert')

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault()

  const username = usernameInput.value
  const password = passwordInput.value

  try {
    // get token
    const { data } = await axios.post('/api/auth/login', { username, password })
    localStorage.setItem('token', data.jwt_token)

    //redirect to dashboard
    window.location.href = './dashboard.html'
  } catch (error) {
    formAlert.classList.add('text-danger')
    formAlert.innerText = 'Wrong username or password'
  }
})
