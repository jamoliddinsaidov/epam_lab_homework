import React from 'react'
import { Switch, Route } from 'react-router-dom'

// components
import Nav from './components/Nav'

// pages
import Home from './pages/Home/Home'
import Edit from './pages/Edit/Edit.container'
import Create from './pages/Create/Create.container'
import TodoList from './pages/TodoList/TodoList.container'
import NotFound from './pages/NotFound/NotFound'
import DetailedTodo from './pages/DetailedTodo/DetailedTodo.container'

// styles
import { GlobalStyles } from './GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Nav />
        <Switch>
          <Route path='/todo/view/:id' component={DetailedTodo} />
          <Route path='/todo/edit/:id' component={Edit} />
          <Route path='/create' component={Create} />
          <Route path='/todolist' component={TodoList} />
          <Route path='/' component={Home} exact />
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  )
}

export default App
