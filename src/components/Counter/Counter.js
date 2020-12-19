import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, setLoggedInStatus } from '../../redux/actions'


function Counter() {

    const counter = useSelector(state => state.counter)
    const isLoggedIn = useSelector(state => state.loggedIn)
    const dispatch = useDispatch()

    return (
        <div className="counter">
            <h2>counter {counter}</h2>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement(2))}>-</button>
            <button onClick={() => dispatch(setLoggedInStatus())}>
                {isLoggedIn ? 'Log Out' : 'Log In'}
            </button>
        </div>
    )
}

export default Counter
