export const chatReducer = (state = {}, action) => {
    const chatKeyString = action.payload ? action.payload.chatKeyString : [];
    const chatKeys = state.chatKeys || []; // mapStateToProps

    switch (action.type) {

        case 'ADD_STORE_CHAT':
            chatKeys.push(chatKeyString);
            return Object.assign(state, {chatKeys});

        case 'REMOVE_STORE_CHAT':
            const newChatKeys = chatKeys.filter(chatKey => chatKey !== chatKeyString)
            return Object.assign(state, {chatKeys: newChatKeys});

        default:
            return state
    }
}
