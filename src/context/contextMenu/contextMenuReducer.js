const handlers = {
    SHOW_CONTEXT: (state, {payload}) => ({...payload, visible: true}),
    HIDE_ALERT: state => ({...state, visible: false}),
    DEFAULT: state => state
}

export const contextMenuReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}