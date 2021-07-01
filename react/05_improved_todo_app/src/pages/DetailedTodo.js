import React, { useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'

// custom hooks
import { useFilter } from '../hooks/useFilter'

// utils
import { TodoContext } from '../TodoContext'
import styled from 'styled-components'
import { Container } from '../GlobalStyles'

const DetailedTodo = () => {
	const { id } = useParams()
	const { todos } = useContext(TodoContext)
	const history = useHistory()

	const todo = useFilter(id, todos, history)

	return (
		<StyledDetailedTodo>
			{todo && (
				<div>
					<h2>{todo.name}</h2>
					<p>{todo.description}</p>
				</div>
			)}
		</StyledDetailedTodo>
	)
}

const StyledDetailedTodo = styled(Container)`
	h2 {
		line-height: 200%;
	}

	p {
		line-height: 150%;
	}
`

export default DetailedTodo
