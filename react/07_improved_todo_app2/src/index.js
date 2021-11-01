import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// router setup
import { BrowserRouter } from 'react-router-dom'

// redux setup
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
