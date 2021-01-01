import data from "./data";

export function getChats() {
    return data.chats
}

export function getPeersByChatID(chatID) {
    return data.chats.find(chat => chat.id === chatID).usersIDs
}

export function isEqualArrays(arr1, arr2) {
    arr1.sort();
    arr2.sort();
    return arr1.length === arr2.length &&
        arr1.every(function (v, i) {
            return v === arr2[i]
        });
}

export function getChatMessagesByPeers(peers){
    const chat = getChats().find(chat=> isEqualArrays(getPeersByChatID(chat.id),peers));
    return getMessagesByChatID(chat.id);
}

export function getActiveUserID() {
    return data.activeUserID
}

export function getMessagesByChatID(id) {
    return data.messages.filter(messages => messages.chatID === id)
}

export function getChatByID(id) {
    return data.chats.find(chat => chat.id === id)
}

export function getUserNameByID(id) {
    const user = data.users.find(user => user.id === id)
    return user.name
}

// export function getStorage(key) {
//     const storageString = localStorage.getItem(key);
//     if (!storageString) {
//         return [];
//     }
//     return JSON.parse(storageString);
// }

// export function setStorage(key, object) {
//     const storage = getStorage(key);
//     if (storage) {
//         return true;
//     }
//     console.log(storage)
//     storage.push(object)
//     localStorage.setItem(key, JSON.stringify(storage));
//     return true;
// }

// export function getChatByChatID(chatID) {
//     const chat = getChatByID(chatID);
//     if (!chat) {
//         return null;
//     }
//     return {
//         id: chat.id,
//         title: chat.title,
//         link: `/im/${chat.id}`
//     }
// }

// /**
//  *
//  * @param chatIDs array
//  */
// export function getChatsByIDs(chatIDs) {
//     return chatIDs.map(chatID => getChatByChatID(chatID))
// }