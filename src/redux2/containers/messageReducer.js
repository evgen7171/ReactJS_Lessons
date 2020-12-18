export function messageReducer(state, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
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