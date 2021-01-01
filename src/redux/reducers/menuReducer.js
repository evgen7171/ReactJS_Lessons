export const menuReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_PROFILE_MENU':
            return {...state, visible: true}
        case 'HIDE_PROFILE_MENU':
            return {...state, visible: false}
        default:
            return state
    }
}