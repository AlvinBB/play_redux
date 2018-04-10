
import * as types from '../constants/ActionTypes';

const initialState = {
    todoLists: []
}
export default function todoApp(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TODO:
            return Object.assign({}, state, {
                todoLists: [...state.todoLists, action.text]
            })
        default: return state
    }
}