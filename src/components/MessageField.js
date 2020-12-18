import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import {Message} from "./Message";
import {getMessagesByChatID, myID} from './utils'
import {ContextMenuContext} from "../context/contextMenu/ContextMenuContext";

export const MessageField = ({messages}) => {
    const chatID = +useParams().chatID;
    const chatMessages = getMessagesByChatID(messages, chatID);
    const {showContext} = useContext(ContextMenuContext);
    const rightClick = (e, message) => {
        e.preventDefault()
        showContext(e, message.userID === myID)
    }

    return (
        <div className="form-control form-group bg-white messages-field border-primary overflow-auto">
            {chatMessages.map((message, key) => (
                <div className="message ml-0 mb-1"
                     onContextMenu={e => rightClick(e, message)}
                     key={key}>
                    <Message message={message}/>
                </div>)
            )}
        </div>
    );
};