import React from 'react'

// components
import Todo from './Todo'

const TodoList = ({ todos }) => {
	return (
		<div>
			{todos[0] && todos.map((todo, index) => <Todo todo={todo} key={index} />)}
		</div>
	)
}

export default TodoList
