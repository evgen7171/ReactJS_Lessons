export default {
    users: [
        {
            id: 111,
            name: 'I am'
        },
        {
            id: 222,
            name: 'Igor'
        },
        {
            id: 333,
            name: 'Ivan'
        },
        {
            id: 100,
            name: 'robot'
        },
    ],
    messages: [
        {
            id: 1,
            chatID: 1,
            userID: 111,
            text: 'Привет!'
        },
        {
            id: 2,
            chatID: 1,
            userID: 222,
            text: 'Привет!'
        },
        {
            id: 3,
            chatID: 1,
            userID: 111,
            text: 'Как дела?'
        },
        {
            id: 4,
            chatID: 2,
            userID: 222,
            text: 'lorem...'
        },
        {
            id: 5,
            chatID: 2,
            userID: 333,
            text: 'ipsum...'
        }
    ],
    chats: [
        {
            id: 1,
            usersIDs: [222, 111]
        },
        {
            id: 2,
            usersIDs: [111, 333]
        },
        {
            id: 3,
            usersIDs: [111, 100]
        }
    ],
    activeUserID: 111
}