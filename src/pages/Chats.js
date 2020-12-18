import React, {useCallback, useState, useEffect} from "react";
import {ChatList} from "../components/ChatList";
import {MessageField} from "../components/MessageField";
import {ControlPanel} from "../components/ControlPanel";
import {Route, Redirect, useLocation} from "react-router-dom";
import {
    allChats,
    allMessages,
    defaultChatID,
    getSelectedChatIDByLocation,
    myID,
    robotChatID,
    robotID
} from "../components/utils";

export const Chats = ({history}) => {

    const selectedChatID = getSelectedChatIDByLocation(useLocation());

    const [messages, setMessages] = useState(allMessages);
    const [chats] = useState(allChats);
    const [text, setText] = useState('');

    const changeText = useCallback(e => setText(e.target.value), []);
    const sendMessage = useCallback(e => {
        e.preventDefault();
        if (text.trim()) {
            setMessages([...messages, {userID: myID, chatID: selectedChatID, text: text}]);
            setText('');
        }
    }, [text]);

    useEffect(() => {
        const message = messages[messages.length - 1]
        const robotMessage = `Вы написали "${message.text}"`;
        if (message.userID === myID && message.chatID === robotChatID) {
            setMessages([...messages, {userID: robotID, chatID: selectedChatID, text: robotMessage}])
        }
    }, [messages])

    return (<>
            <Route history={history} path="/chat/:chatID">
                <form className="form rounded" onSubmit={sendMessage}>
                    <div className="form-group d-flex mb-3">
                        <ChatList chats={chats}/>
                        <div className="w-100 messages-block">
                            <MessageField messages={messages}/>
                            <ControlPanel text={text} changeText={changeText}/>
                        </div>
                    </div>
                </form>
            </Route>
            <Redirect from="/chat" to={`/chat/${defaultChatID}`}/>
        </>
    )
}