import React, { useReducer } from 'react'
import { reducer } from '../reducers/countReducer'

const initialState = {
    count: 0,
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const randomNum = Math.floor(Math.random() * 100) + 1
    console.log(randomNum)

  return (
    <div>
        <button disabled={state.count === 0} onClick={() => dispatch({type: 'decrement'})}>-</button>
        <h3>{state.count}</h3>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <button onClick={() => dispatch({type: 'random', payload: randomNum})}>Random</button>
        <button onClick={() => dispatch({type: '42', payload: 42})}>42</button>
    </div>
  )
}

export default Counter