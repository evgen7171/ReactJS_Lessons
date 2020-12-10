import React, {Fragment} from "react"

const colors = ['green', 'red', 'blue']

export const Message = ({message, getUser, user_id_mine}) => {
    const getColor = () => colors[getUser(message.user_id).id - 1]
    const isMineMessage = message => user_id_mine === message.user_id
    return (
        <div className="row ml-0 mr-0">
            <div className="message-user">{!isMineMessage(message) ?
                <Fragment>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-fill"
                         fill={getColor(user_id_mine)}
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                    {getUser(message.user_id).name}
                </Fragment>
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

