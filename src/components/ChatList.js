import React from "react"

export const ChatList = ({chats, chat_id, selectChat}) => {
    return (
        <ul className="list-group bg-white overflow-auto mr-2 chat-list h-auto col-md-2 p-0">
            {chats.map(chat => {
                return <li
                    className={`list-group-item chat-item ${chat_id === chat.id ? "active" : ""}`}
                    onClick={() => selectChat(chat.id)} key={chat.id}>
                    {chat.title}
                </li>
            })}
        </ul>
    )
}

