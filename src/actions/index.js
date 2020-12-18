import * as actions from './actionTypes'
export const increment = (payload) => {
    return {
        type: actions.INCREMENT,
        payload: payload
    }
}
export const decrement = (payload) => {
    return {
        type: actions.DECREMENT,
        payload: payload
    }
}
export const setLoggedInStatus = () => {
    return {
        type: actions.SIGNED_IN
    }
}

export const addTodo = (description) => {
    return {
        type: actions.ADD_ITEM,
        payload: {
            description
        }
    }
}

export const removeTodo = (id) => {
    return {
        type: actions.REMOVE_ITEM,
        payload: {
            id
        }
    }
}

export const taskCompleted = (id) => {
    return {
        type: actions.TASK_COMPLETED,
        payload: {
            id
        }
    }
}
