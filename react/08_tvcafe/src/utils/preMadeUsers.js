import { v4 as uuidv4 } from 'uuid'

export const preMadeUsers = [
	{
		id: uuidv4(),
		name: 'John Doe',
		credentials: {
			email: 'johndoe@mail.com',
			password: 'john12345',
		},
		movies: {
			favorites: [],
			recommended: [],
		},
		friends: [],
		notifications: [],
	},
	{
		id: uuidv4(),
		name: 'Angela Whisley',
		credentials: {
			email: 'angela@mail.com',
			password: 'angela12345',
		},
		movies: {
			favorites: [],
			recommended: [],
		},
		friends: [],
		notifications: [],
	},
	{
		id: uuidv4(),
		name: 'Michael Scott',
		credentials: {
			email: 'michael@mail.com',
			password: 'michael12345',
		},
		movies: {
			favorites: [],
			recommended: [],
		},
		friends: [],
		notifications: [],
	},
	{
		id: uuidv4(),
		name: 'Vivy Blue',
		credentials: {
			email: 'vivy@mail.com',
			password: 'vivy12345',
		},
		movies: {
			favorites: [],
			recommended: [],
		},
		friends: [],
		notifications: [],
	},
]
