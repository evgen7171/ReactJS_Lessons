import data from "./data";

export function getChats() {
    return data.chats
}

export function getMessagesByChatID(id) {
    return data.messages.filter(messages => messages.chatID === id)
}

export function getChatByID(id) {
    return data.chats.find(chat => chat.id === id)
}

export function getUserByID(id) {
    return data.users.find(user => user.id === id)
}

export function getStorage(key) {
    const storageString = localStorage.getItem(key);
    if (!storageString) {
        return [];
    }
    return JSON.parse(storageString);
}

export function setStorage(key, object) {
    const storage = getStorage(key);
    if (storage) {
        return true;
    }
    console.log(storage)
    storage.push(object)
    localStorage.setItem(key, JSON.stringify(storage));
    return true;
}

export function getChatByChatID(chatID) {
    const chat = getChatByID(chatID);
    if (!chat) {
        return null;
    }
    return {
        id: chat.id,
        title: chat.title,
        link: `/im/${chat.id}`
    }
}