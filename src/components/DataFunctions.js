import {user_id_mine, users} from "../data/data";

export function getChatMessages(messages, chatId) {
    return messages.filter(message => message.chat_id === chatId)
}

export function getUserNameByMessage(message) {
    return users.find(user => user.id === message.user_id).name
}

export function isMineMessage(message){
    return +message.user_id === user_id_mine
}