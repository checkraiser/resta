import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import { helloSaga, watchIncrementAsync } from '../sagas/counter'

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    applyMiddleware(createSagaMiddleware(helloSaga, watchIncrementAsync)),
    initialState
  )
}

