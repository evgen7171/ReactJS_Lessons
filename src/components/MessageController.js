import {user_id_mine} from "../data/data";

export const MessageController = (messages, chatId, controlFunction) => {
    return function(action, message) {
        switch (action) {
            case 'add':
                controlFunction([...messages, {user_id: user_id_mine, chat_id: chatId, text: message}])
                break;
            default:
                break;
        }
    }
}