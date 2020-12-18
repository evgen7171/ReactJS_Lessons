import {data} from "./data";

/**
 * Контроллер для получения/изменения данных
 * @returns {{myID: number, getChatTitle: (function(*): string|*), allUsers: [{role: string, name: string, id: number}, {role: string, name: string, id: number}, {role: string, name: string, id: number}], allChats: [{id: number, title: string}, {id: number, title: string}, {id: number, title: string}], getMessagesByChatID: (function(*): unknown[]), defaultChatID: number, getUserByMessage: (function(*): unknown), allMessages: [{chatID: number, text: string, userID: number}, {chatID: number, text: string, userID: number}, {chatID: number, text: string, userID: number}, {chatID: number, text: string, userID: number}, {chatID: number, text: string, userID: number}], robotID: number, robotChatID: number}}
 */
export function useDataObject() {
    const allMessages = data.messagesArray;
    const defaultChatID = data.defaultChatID;
    const myID = data.myID;
    const robotChatID = data.robotChatID;
    const allUsers = data.users;
    const robotID = data.robotID;
    const allChats = data.chats;

    const getMessagesByChatID = chatID => {
        return data.messagesArray.filter(message => message.chatID === chatID)
    }
    const getUserByMessage = message => {
        return data.users.find(user => user.id === message.userID)
    }
    const getChatTitle = ChatID => {
        return data.chats.find(chat => chat.id === ChatID).title
    }
    return {
        allMessages,
        defaultChatID,
        myID,
        robotChatID,
        allUsers,
        robotID,
        allChats,
        getMessagesByChatID,
        getUserByMessage,
        getChatTitle
    }
}
