export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {...state, auth: true, user: action.payload}
        case 'LOG_OUT':
            return {...state, auth: false, user: null}
        default:
            return state
    }
}