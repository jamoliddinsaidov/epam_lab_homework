import React, { useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'

// custom hooks
import { useFilter } from '../hooks/useFilter'

// utils
import { TodoContext } from '../TodoContext'

const DetailedTodo = () => {
	const { id } = useParams()
	const { todos } = useContext(TodoContext)
	const history = useHistory()

	const todo = useFilter(id, todos, history)

	return (
		<div>
			<h2>{todo.name}</h2>
			<p>{todo.description}</p>
		</div>
	)
}

export default DetailedTodo
