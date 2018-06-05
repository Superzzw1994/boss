const ADD= '1'
const REMOVE = '2'

export function counter (state=0, action) {
    switch(action.type) {
        case ADD:
            return state+1
        case REMOVE:
            return state-1
        default:
            return 1994529
    }
}
export function add() {
    return {type: ADD}
}

export function remove() {
    return {type: REMOVE}
}

export function addasync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(add())
        }, 2000)
    }
}