export const addStoreChat = chatKeyString => {
    return {
        type: 'ADD_STORE_CHAT',
        payload: {chatKeyString}
    }
}
export const removeStoreChat = chatKeyString => {
    return {
        type: 'REMOVE_STORE_CHAT',
        payload: {chatKeyString}
    }
}
export const addMessage = (text, userID, chatID) => {
    return {
        type: 'ADD_MESSAGE',
        payload: {userID, chatID, text}
    }
}
export const removeMessage = (messageID) => {
    return {
        type: 'REMOVE_MESSAGE',
        payload: {messageID}
    }
}
export const login = user => {
    return {
        type: 'LOG_IN',
        payload: {user: {email: user.email}}
    }
}
export const logout = () => {
    return {
        type: 'LOG_OUT'
    }
}

export const loading = () => {
    return {
        type: 'LOADING'
    }
}

export const showProfileMenu = () => {
    return {
        type: 'SHOW_PROFILE_MENU'
    }
}

export const hideProfileMenu = () => {
    return {
        type: 'HIDE_PROFILE_MENU'
    }
}