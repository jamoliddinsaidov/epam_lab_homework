export const checkLocalStorage = () => {
  let todos

  if (localStorage.getItem('todos') === null) {
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }

  return todos
}

export const saveToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}
