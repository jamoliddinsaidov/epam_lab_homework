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
			id: '',
			name: '',
			credentials: {
				email: '',
				password: '',
			},
			movies: {
				favorites: [],
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
	user.id = uuidv4()
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

export const addFavoriteMovies = (movie) => {
	let users = checkLocalStorageUsers()
	let user = checkLocalStorageCurrentUser()

	// setting favorite movie properties
	user.movies.favorites.push(movie)
	let index = users.findIndex((u) => u.id === user.id)
	users[index] = user

	// saving to local storage
	localStorage.setItem('users', JSON.stringify(users))
	localStorage.setItem('user', JSON.stringify(user))
	return true
}

export const removeFromFavorites = (id) => {
	let users = checkLocalStorageUsers()
	let user = checkLocalStorageCurrentUser()

	// removing movie from user's favorite list
	let index = user.movies.favorites.findIndex((movie) => movie.id === id)
	user.movies.favorites.splice(index, 1)
	users.filter((u) => u.id === user.id)[0] = user

	localStorage.setItem('users', JSON.stringify(users))
	localStorage.setItem('user', JSON.stringify(user))
	return true
}

export const checkIsMovieFavorite = (id) => {
	let user = checkLocalStorageCurrentUser()
	let isFavorite = user.movies.favorites.filter((movie) => movie.id === id)[0]
		?.isFavorite

	return isFavorite
}

export const followFriend = (values) => {
	let users = checkLocalStorageUsers()
	let user = checkLocalStorageCurrentUser()

	// adding a friend in friends array
	let index = users.findIndex((u) => u.id === user.id)
	user.friends.push(values)
	users[index] = user

	localStorage.setItem('users', JSON.stringify(users))
	localStorage.setItem('user', JSON.stringify(user))
	return true
}

export const unfollowFriend = (id) => {
	let users = checkLocalStorageUsers()
	let user = checkLocalStorageCurrentUser()

	// removing a friend from friend array
	let friendIndex = user.friends.findIndex((u) => u.id === id)
	user.friends.splice(friendIndex, 1)
	let userIndex = users.findIndex((u) => u.id === user.id)
	users[userIndex] = user

	localStorage.setItem('users', JSON.stringify(users))
	localStorage.setItem('user', JSON.stringify(user))
	return true
}

export const checkIsFollowed = (id) => {
	let user = checkLocalStorageCurrentUser()
	let isFollowed = user.friends.filter((friend) => friend.id === id)[0]
		?.isFollowed

	return isFollowed
}
