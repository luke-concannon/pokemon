import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Auth0Provider } from '@auth0/auth0-react'


import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
      domain={'piwakawaka-2022-luke.au.auth0.com'}
      clientId={'34QGLzUvCJpuAam0VkTZrBerjrvWdAah'}
      redirectUri={window.location.origin}
      audience="https://classicpokes/api"
    >
    <Provider store={store}>
      <App />
    </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})