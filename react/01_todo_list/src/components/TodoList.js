import React from 'react'

// components
import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {
	return (
		<div>
			{todos[0] &&
				todos.map((todo, index) => (
					<Todo todo={todo} todos={todos} setTodos={setTodos} key={index} />
				))}
		</div>
	)
}

export default TodoList
