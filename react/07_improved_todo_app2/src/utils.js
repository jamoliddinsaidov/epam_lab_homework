export const checkLocalStorage = () => {
  let todos

  if (localStorage.getItem('todos') === null) {
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }

  return todos
}

export const saveToLocalStorage = (todo) => {
  let todos = checkLocalStorage()
  todos.push(todo)
  localStorage.setItem('todos', JSON.stringify(todos))
}

export const deleteFromLocalStorage = (index) => {
  let todos = checkLocalStorage()
  todos.splice(index, 1)
  localStorage.setItem('todos', JSON.stringify(todos))
}

export const changeCompletePropertyInLocalStorage = (index) => {
  let todos = checkLocalStorage()
  todos[index].isCompleted = !todos[index].isCompleted
  localStorage.setItem('todos', JSON.stringify(todos))
}

export const editTodoInLocalStorage = (id, updatedTodo) => {
  let todos = checkLocalStorage()
  todos = todos.map((todo) =>
    todo.id === id
      ? {
          ...todo,
          name: updatedTodo.name,
          description: updatedTodo.description,
          isCompleted: updatedTodo.isCompleted,
        }
      : todo
  )
  localStorage.setItem('todos', JSON.stringify(todos))
}
