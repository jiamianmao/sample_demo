import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducers from './reducer'
import './index.css'
import App from './App'

const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : f => f
const store = createStore(reducers, compose(
  reduxDevTools
))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,document.getElementById('root'))
