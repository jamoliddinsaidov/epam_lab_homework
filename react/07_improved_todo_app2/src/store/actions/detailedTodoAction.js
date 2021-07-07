import { GET_TODO } from '../types'

export const getTodo = (id, todos) => ({
	type: GET_TODO,
	payload: { id, todos },
})
