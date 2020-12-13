import {chat_id_robot, robot_id} from "../data/data";

export const robotWatch = (chatId, messages, changeMessages, controlAction, setControlAction) =>{
    const message = messages[messages.length - 1]
    const text = {chat_id: chatId, user_id: robot_id, text: `Вы написали ${message.text}`}
    message.user_id !== robot_id && chatId === chat_id_robot && controlAction &&
    changeMessages([...messages, text]);
    setControlAction(false);
}