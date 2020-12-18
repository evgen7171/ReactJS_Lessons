export const showAlert = (text, type) => ({
    type: 'SHOW_ALERT',
    payload: {text, type}
})

export const hideAlert = () => ({type: 'HIDE_ALERT'})

