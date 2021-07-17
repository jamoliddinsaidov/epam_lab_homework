import { v4 as uuidv4 } from 'uuid'

export const checkLocalStorageUsers = () => {
	let users

	if (localStorage.getItem('users') === null) {
		users = []
	} else {
		users = JSON.parse(localStorage.getItem('users'))
	}

	return users
}

export const checkLocalStorageCurrentUser = () => {
	let user

	if (localStorage.getItem('user') === null) {
		user = {
			id: uuidv4(),
			name: '',
			credentials: {
				email: '',
				password: '',
			},
			movies: {
				favoritesID: [
					{
						id: '',
						name: '',
						image: '',
					},
				],
				recommended: [
					{
						id: '',
						name: '',
						image: '',
						friendId: '',
					},
				],
			},
			friends: [],
		}
	} else {
		user = JSON.parse(localStorage.getItem('user'))
	}

	return user
}

export const addUserCredentialsToLocalStorage = (values) => {
	// checking if a user already exists
	let users = checkLocalStorageUsers()
	let alreadyExists = users.some(
		(user) => user.credentials.email === values.email
	)

	if (alreadyExists) {
		return 'Account with this email already exists'
	}

	let user = checkLocalStorageCurrentUser()

	// setting the user input values
	user.name = values.name
	user.credentials.email = values.email
	user.credentials.password = values.password

	// adding a new user
	users.push(user)
	localStorage.setItem('users', JSON.stringify(users))
	localStorage.setItem('user', JSON.stringify(user))
	return true
}

export const loginUser = (values) => {
	if (localStorage.getItem('users') === null) {
		return 'You have no account yet. Please, sign up first.'
	}

	// check if the user exists
	let users = checkLocalStorageUsers()
	let user = users.filter(
		(u) =>
			u.credentials.email === values.email &&
			u.credentials.password === values.password
	)

	if (user.length === 0) {
		// if user doesn't exist
		return 'Your credentials do not match. Please, try again or sign up.'
	}

	// set the current user
	localStorage.setItem('user', JSON.stringify(user[0]))
	localStorage.setItem('isSignedIn', true)
	return true
}

export const logoutUser = () => {
	localStorage.removeItem('isSignedIn')
	localStorage.removeItem('user')
}

export const checkIsUserSignedIn = () => localStorage.getItem('isSignedIn')
