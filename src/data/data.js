export const data = {
    users: [
        {id: 1, role: 'bot', name: 'MR.RO5OT'},
        {id: 2, role: 'user', name: 'Иван'},
        {id: 3, role: 'user', name: 'I am'},
    ],
    chats: [
        {id: 1, title: 'chat with bot'},
        {id: 2, title: 'messenger'},
        {id: 3, title: 'test'},
    ],
    messages: [
        {id: 1, userID: 1, chatID: 1, text: 'Привет'},
        {id: 2, userID: 2, chatID: 2, text: 'Привет всем!'},
        {id: 3, userID: 2, chatID: 2, text: 'Как дела?'},
        {
            id: 4,
            userID: 2,
            chatID: 3,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, deleniti nisi nobis odio sunt.'
        },
        {
            id: 5,
            userID: 3,
            chatID: 3,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, deleniti nisi nobis odio sunt.'
        },
    ],
    myID: 3,
    robotID: 1,
    robotChatID: 1,
    defaultChatID: 1
}