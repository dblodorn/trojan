import { createBrowserHistory } from 'history'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

let composeEnhancer

if (process.env.NODE_ENV === 'development') {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
} else {
  composeEnhancer = compose
}

const history = createBrowserHistory()

const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(
      thunk
    ),
  ),
)

export {
  history,
  store
}