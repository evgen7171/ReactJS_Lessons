import {data} from "../data/data";
import {useLocation} from "react-router-dom";

export const allMessages = data.messages;
export const defaultChatID = data.defaultChatID;
export const myID = data.myID;
export const robotChatID = data.robotChatID;
export const allUsers = data.users;
export const robotID = data.robotID;
export const allChats = data.chats;

export const getUserByMessage = message => {
    return allUsers.find(user => user.id === message.userID)
}
export const getChatTitle = ChatID => {
    const chat = allChats.find(chat => chat.id === ChatID);
    return chat ? chat.title : null
}
export const getMessagesByChatID = (messages, chatID) => {
    return messages.filter(message => message.chatID === chatID)
}
export const getColorByUserID = userID => ['red', 'blue', 'green'][userID - 1]

export const getMyInfo = () => {
    return allUsers.find(user => user.id === myID);
}


export const getSelectedChatIDByLocation = location => {
    const locationMatches = [...location.pathname.matchAll(/chat\/.*$/g)];
    return locationMatches.length ? +(locationMatches[0][0].substr(5)) : null;
}