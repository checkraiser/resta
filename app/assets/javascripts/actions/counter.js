export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const SET_COUNTER = 'SET_COUNTER';
export const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD'
export function setCounter(counter) {
  return {
    type: SET_COUNTER,
    counter: counter
  };
}

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return {
    type: INCREMENT_IF_ODD
  }
}
