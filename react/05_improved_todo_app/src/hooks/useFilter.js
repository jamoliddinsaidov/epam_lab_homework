import { useState, useEffect } from 'react'

export const useFilter = (id, todos, history) => {
  const [filteredTodo, setFilteredTodo] = useState(null)

  useEffect(() => {
    const todo = todos.filter((t) => t.id === id)[0]
    setFilteredTodo(todo)
  }, [id, todos, history])

  return filteredTodo
}
