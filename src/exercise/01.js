// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, action) {
  let newState = {...state};

  switch (action.type) {
      case 'INCREMENT':
        newState.count += action.step;
        break;
      default:
        throw `Unsupported action type: ${action.type}`;
  }

  return newState;
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount
  });
  const increment = () => dispatch({type: 'INCREMENT', step});
  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
