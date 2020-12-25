export const addStoreChat = chat => {
    return {
        type: 'ADD_STORE_CHAT',
        payload: {chat}
    }
}
export const removeStoreChat = chatID => {
    return {
        type: 'REMOVE_STORE_CHAT',
        payload: {chatID}
    }
}