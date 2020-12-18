export function messageReducer(state, action) {
    switch (action.type) {
        case 'GET_ALL':
            return [
                ...state,
                {
                    counterState: state.counterState + 1
                }
            ]
        default:
            return state
    }
}