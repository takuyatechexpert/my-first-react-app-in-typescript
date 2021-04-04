import React, { useReducer } from 'react'


type ActionType = { type: 'increment' | 'decrement' }
type stateType = { count: number }

const initialState: stateType = { count: 0 }

function reducer(state: stateType, action: ActionType): stateType | never {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      Count: { state.count }

      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}

export default CounterWithReducer