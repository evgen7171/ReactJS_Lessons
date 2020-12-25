const initialState = {
    openedChats: []
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_STORE_CHAT':
            const newChat = action.payload.chat;
            !state.openedChats.find(chat =>
                chat.id === newChat.id
            ) && state.openedChats.push(newChat)
            return {
                ...state
            }
        case 'REMOVE_STORE_CHAT':
            const chatIndex = state.openedChats.findIndex(chat => {
                    return chat.id === +action.payload.chatID
                }
            );
            chatIndex !== -1 && state.openedChats.splice(chatIndex, 1)
            return {
                ...state
            }
        default:
            return {...state}
    }
    return {...state}
}