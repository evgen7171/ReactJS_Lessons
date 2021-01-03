import React from 'react'
import {Redirect, useLocation} from "react-router-dom";
import {ChatList} from "./Messenger/ChatList";
import {getChatMessagesByPeers, getMessagesByChatID, getPeersByChatID, isEqualArrays} from "../../data/utils";
import {InputText} from "./Messenger/InputText";
import {MessageField} from "./Messenger/MessageField";
import {mapRequestToProps} from "../utils";
import {getChatTitleByPeers} from "./Messenger/utils";

function Messenger() {

    const location = useLocation();
    const request = mapRequestToProps(location);
    if (request.empty) {
        return <ChatList/>
    }
    const chatTitle = getChatTitleByPeers(request.peers);
    const messages = getChatMessagesByPeers(request.peers);
    if (!messages) {
        return <Redirect to="/im"/>
    }

    return <div>
        <h5 className="border text-center">{chatTitle}</h5>
        <MessageField messages={messages}/>
        <InputText/>
    </div>
}


export default Messenger;