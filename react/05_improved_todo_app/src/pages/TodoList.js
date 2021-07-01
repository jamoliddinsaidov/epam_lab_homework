import React, { useContext } from 'react'

// utils
import { TodoContext } from '../TodoContext'

const TodoList = () => {
	const { todos, todoCount } = useContext(TodoContext)

	return (
		<div>
			<h1>TodoList</h1>
			{todos[0] && (
				<div>
					<h3>number of todos: {todoCount}</h3>
					{todos.map((todo) => (
						<p key={todo.id}>{todo.todo}</p>
					))}
				</div>
			)}
		</div>
	)
}

export default TodoList
