import types from "./types";

export function chatReducer(state = {}, action) {
    switch (action.type) {
        case types.ADD_CHAT:
            return {
                ...state,
                status: 'add chat'
            };
        case types.REMOVE_CHAT:
            return {
                ...state,
                status: 'remove chat'
            };
        case types.UPDATE_CHAT:
            return {
                ...state,
                status: 'update chat'
            };
        default:
            return state
    }
}