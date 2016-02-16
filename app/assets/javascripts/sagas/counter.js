import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'

export function* helloSaga() {
}


// an utility function: return a Promise that will resolve after 1 second
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT_COUNTER' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync)
}