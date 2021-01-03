import React from "react";
import {getChats} from "../../../data/utils";
import {Link} from "react-router-dom";

export const ChatList = () => {
    const chats = getChats();
    return <div className="d-flex flex-column">
        {
            chats.map((chat,key) =>
                <Link key={key} to={`/im/${chat.id}`}>
                    {chat.title}
                </Link>
            )
        }
    </div>
}