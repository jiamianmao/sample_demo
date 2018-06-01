import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducers from './reducer'
import { AppContainer } from 'react-hot-loader'
import './index.css'
import App from './App'

const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : f => f
const store = createStore(reducers, compose(
  reduxDevTools
))

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Router>
          <Component />
        </Router>
      </AppContainer>
    </Provider>
    ,document.getElementById('root')
  )
}

render(App)
