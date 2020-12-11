import React, {Fragment} from "react"

const colors = ['red', 'blue', 'green']

export const Message = ({message, getUser, user_id_mine}) => {
    const getColor = () => colors[getUser(message.user_id).id]
    const isMineMessage = message => user_id_mine === message.user_id
    return (
        <div className="row ml-0 mr-0">
            <div className="message-user">{!isMineMessage(message) ?
                <>
                    <MessageUserIcon/>
                    {getUser(message.user_id).name}
                </>
                : ''}
            </div>
            <div
                className={`${isMineMessage(message) ?
                    "message-text-mine text-right" : "message-text"}`}>
                {message.text}
            </div>
        </div>
    )
}

