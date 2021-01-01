import React from "react";
import {Link, useParams} from "react-router-dom";

const MessengerLink = ({chat, defaultChat}) => {
    const selectedChatID = +useParams().chatID;
    const isSelectedChat = chat => chat.id === selectedChatID;

    const removeChat = e => {
        const chatID = +e.target.id.substr(5);
        // mapDispatchToChat().removeChat(chatID)
    }
    return (
        <div
            className="d-flex align-items-center justify-content-between">
            <Link to={chat.link}
                  className="list-group-item-action btn">
                <div>{chat.title}</div>
            </Link>
            {
                <div id={`chat-${chat.id}`}
                     onClick={removeChat}
                     className="btn btn-sm border">
                    &times;
                </div>
            }
        </div>
    )
}

export default MessengerLink;