import { INCREASE_COUNT, DECREASE_COUNT, GET_COUNT } from '../types'

export const increaseCount = () => ({
	type: INCREASE_COUNT,
})

export const decreaseCount = () => ({
	type: DECREASE_COUNT,
})

export const getCount = () => ({
	type: GET_COUNT,
})
