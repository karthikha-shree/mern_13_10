import React from 'react'
import { useReducer } from 'react'
const reduce = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }
        case "DECREMENT":
            return { count: state.count - 1 }
        case "RESET":
            return { count: 0 }
        default:
            return state;
    }
}
const initialState = { count: 0 }
const Reducer = () => {
    const [state, dispatch] = useReducer(reduce, initialState);
    return (
        <div>
            <h1>Reducer example</h1>
            <h3>Count: {state.count}</h3>
            <button onClick={()=>dispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={()=>dispatch({ type: "DECREMENT" })}>-</button>
            <button onClick={()=>dispatch({ type: "RESET" })}>Reset</button>

        </div>
    )
}

export default Reducer