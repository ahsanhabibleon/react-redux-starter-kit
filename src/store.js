
import { createStore } from 'redux'
import { loadState, saveState } from './localStorage/localStorage'
import allReducers from './reducers'

const persistedState = loadState();

const myStore = createStore(
    allReducers,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

myStore.subscribe(() => {
    saveState({
        todos: myStore.getState().todos
    })
})

// myStore.subscribe(() => {
//     saveState(myStore.getState())
// })

export default myStore