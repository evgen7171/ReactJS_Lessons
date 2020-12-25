export default {
    users: [
        {
            id: 1,
            name: 'I am',
            role: 'admin'
        },
        {
            id: 2,
            name: 'Igor',
            role: 'user'
        },
        {
            id: 3,
            name: 'Ivan',
            role: 'user'
        },
    ],
    messages: [
        {
            id: 1,
            chatID: 1,
            userID: 1,
            text: 'Привет!'
        },
        {
            id: 2,
            chatID: 1,
            userID: 2,
            text: 'Привет!'
        },
        {
            id: 3,
            chatID: 1,
            userID: 1,
            text: 'Как дела?'
        },
        {
            id: 4,
            chatID: 2,
            userID: 2,
            text: 'lorem...'
        },
        {
            id: 5,
            chatID: 2,
            userID: 3,
            text: 'ipsum...'
        }
    ],
    chats: [
        {
            id: 1,
            title: 'chat привет'
        },
        {
            id: 2,
            title: 'chat lorem'
        },
        {
            id: 3,
            title: 'chat robot'
        },
    ]
}