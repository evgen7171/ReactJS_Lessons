import types from "./types";

export function messageReducer(state = {}, action) {
    switch (action.type) {
        case types.ADD_MESSAGES:
            return {
                ...state,
                status: 'add message'
            };
        case types.REMOVE_MESSAGES:
            return {
                ...state,
                status: 'remove message'
            };
        case types.UPDATE_MESSAGES:
            return {
                ...state,
                status: 'update message'
            };
        default:
            return state
    }
}