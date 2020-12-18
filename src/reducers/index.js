import counterReducer from './counter'
import Todos from './todos'
import loggedInReducer from './isLogged'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    loggedIn: loggedInReducer,
    todos: Todos
})

export default allReducers