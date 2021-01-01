import React, {useMemo} from "react";
import {getChats} from "../../../data/utils";
import {Link} from "react-router-dom";
import {getChatLink, getChatTitleByPeers} from "./utils";

export const ChatList = () => {
    const chats = useMemo(() => getChats(), []);
    return <div className="d-flex flex-column">
        {
            chats.map((chat, key) =>
                <Link key={key} to={getChatLink(chat.usersIDs)}>
                    {getChatTitleByPeers(chat.usersIDs)}
                </Link>
            )
        }
    </div>
}