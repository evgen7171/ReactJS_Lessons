import React from "react";
import {Link} from "react-router-dom";
import {store} from "../../index";
import {removeStoreChat} from "../../context/actions";

export const MessengerLink = ({chat, isSelectedChat, defaultChat}) => {
    const removeChat = e => {
        if (isSelectedChat) {
            const chatID = e.target.id.substr(5);
            store.dispatch(removeStoreChat(chatID));
        } else {
            const chatID = e.target.id.substr(5);
            store.dispatch(removeStoreChat(chatID));
        }
    }
    return (
        <div
            className="d-flex align-items-center justify-content-between">
            <Link to={chat.link}
                  className="list-group-item-action btn">
                <div>{chat.title}</div>
            </Link>
            {
                !defaultChat ?
                    isSelectedChat ?
                        <Link to="/im" onClick={removeChat}
                              className="btn btn-sm border">
                            &times;
                        </Link>
                        :
                        <div id={`chat-${chat.id}`}
                             onClick={removeChat}
                             className="btn btn-sm border">
                            &times;
                        </div>
                    : <></>

            }
        </div>
    )
}