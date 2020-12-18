import React from "react"
import {Link, useParams} from "react-router-dom";

export const ChatList = ({chats}) => {
    const selectedChatID = +useParams().chatID;
    const popup=()=>{
        console.log('add chat')
        // "add chat"
    }
    return (
        <ul className="list-group border border-primary bg-white overflow-auto mr-2 h-auto col-md-2 p-0">
            {
                chats.map((chat, chatID) => {
                    return <Link to={`/chat/${chatID + 1}`} key={chatID}
                                 className={`list-group-item chat-item ${selectedChatID === chat.id ? "active" : ""}`}>
                        {chat.title}
                    </Link>
                })
            }
            <li className="list-group-item chat-item" onClick={()=>popup()}>Add</li>
        </ul>
    )
}

