import React from 'react'
import {useParams, Redirect} from "react-router-dom";
import {ChatList} from "./ChatList";
import {getChatByID, getMessagesByChatID, getStorage} from "../../../data/utils";
import {withRightBar} from "../withRightBar";
import {InputText} from "./InputText";
import {MessageField} from "./MessageField";
import {addStoreChat} from "../../../context/actions";
import {store} from '../../../index';

function Messenger() {

    const chatID = useParams().chatID;

    if (!chatID) {
        return <ChatList/>
    }

    const chat = getChatByID(+chatID);
    chat && store.dispatch(addStoreChat(chat))

    const messages = getMessagesByChatID(+chatID);
    if (!chat || !messages) {
        return <Redirect to="/im"/>
    }

    return <div>
        <MessageField messages={messages}/>
        <InputText/>
    </div>
}

export default withRightBar(Messenger)