import { v4 as uuidv4 } from 'uuid'
import { preMadeUsers } from './preMadeUsers'

export const checkLocalStorageUsers = () => {
	let users

	if (localStorage.getItem('users') === null) {
		users = []
		// adding premade users so that there will be users to follow in the first sign in/up
		preMadeUsers.forEach((preMadeUser) => {
			users.push(preMadeUser)
		})
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
				recommended: [],
			},
			friends: [],
			notifications: [],
		}
	} else {
		user = JSON.parse(localStorage.getItem('user'))
	}

	return user
}

const getDataFromLocalStorage = () => {
	let users = checkLocalStorageUsers()
	let user = checkLocalStorageCurrentUser()

	return [user, users]
}

const saveToLocalStorage = (user, users) => {
	localStorage.setItem('users', JSON.stringify(users))
	localStorage.setItem('user', JSON.stringify(user))
}

export const addUserCredentialsToLocalStorage = (values) => {
	// checking if a user already exists
	const [user, users] = getDataFromLocalStorage()
	let alreadyExists = users.some(
		(user) => user.credentials.email === values.email
	)

	if (alreadyExists) {
		return 'Account with this email already exists'
	}

	// setting the user input values
	user.id = uuidv4()
	user.name = values.name
	user.credentials.email = values.email
	user.credentials.password = values.password

	// adding a new user
	users.push(user)
	saveToLocalStorage(user, users)
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
	const [user, users] = getDataFromLocalStorage()
	saveToLocalStorage(user, users)

	// setting favorite movie properties
	user.movies.favorites.push(movie)
	let index = users.findIndex((u) => u.id === user.id)
	users[index] = user

	// saving to local storage
	saveToLocalStorage(user, users)
	return true
}

export const removeFromFavorites = (id) => {
	const [user, users] = getDataFromLocalStorage()

	// removing movie from user's favorite list
	let index = user.movies.favorites.findIndex((movie) => movie.id === id)
	user.movies.favorites.splice(index, 1)
	users.filter((u) => u.id === user.id)[0] = user

	saveToLocalStorage(user, users)
	return true
}

export const checkIsMovieFavorite = (id) => {
	let user = checkLocalStorageCurrentUser()
	let isFavorite = user.movies.favorites.filter((movie) => movie.id === id)[0]
		?.isFavorite

	return isFavorite
}

export const followFriend = (values) => {
	const [user, users] = getDataFromLocalStorage()

	// adding a friend in friends array
	let index = users.findIndex((u) => u.id === user.id)
	user.friends.push(values)
	users[index] = user

	saveToLocalStorage(user, users)
	return true
}

export const unfollowFriend = (id) => {
	const [user, users] = getDataFromLocalStorage()

	// removing a friend from friend array
	let friendIndex = user.friends.findIndex((u) => u.id === id)
	user.friends.splice(friendIndex, 1)
	let userIndex = users.findIndex((u) => u.id === user.id)
	users[userIndex] = user

	saveToLocalStorage(user, users)
	return true
}

export const checkIsFollowed = (id) => {
	let user = checkLocalStorageCurrentUser()
	let isFollowed = user.friends.filter((friend) => friend.id === id)[0]
		?.isFollowed

	return isFollowed
}

export const recommendMovie = (values) => {
	let users = checkLocalStorageUsers()

	// adding recommended movie
	let index = users.findIndex((user) => user.id === values.friendId)
	users[index].movies.recommended.push(values)

	// setting notification
	const notificationValues = {
		movieId: values.movieId,
		movieName: values.name,
		friendId: values.friendId,
		friendName: values.friendName,
	}
	users[index].notifications.push(notificationValues)

	localStorage.setItem('users', JSON.stringify(users))
	return true
}

export const clearNotification = (id) => {
	const [user, users] = getDataFromLocalStorage()

	// clearing notification array
	let index = users.findIndex((u) => u.id === user.id)
	user.notifications = []
	users[index] = user

	saveToLocalStorage(user, users)
	return true
}

export const getNotificationsLength = () => {
	let user = checkLocalStorageCurrentUser()
	return user.notifications.length
}
