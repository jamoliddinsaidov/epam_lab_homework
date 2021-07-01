import React, { useContext, useEffect } from 'react'

// components
import Todo from '../components/Todo'

// utils
import { TodoContext } from '../TodoContext'

const TodoList = () => {
	const { todos, todoCount } = useContext(TodoContext)

	useEffect(() => {
		// scroll up whenever route changes to '/todolist'
		window.scroll(0, 0)
	}, [])

	return (
		<div>
			<h1>TodoList</h1>
			{todos[0] && (
				<div>
					<h3>Number of todos: {todoCount}</h3>
					{todos.map((todo) => (
						<Todo todo={todo} key={todo.id} />
					))}
				</div>
			)}
		</div>
	)
}

export default TodoList
