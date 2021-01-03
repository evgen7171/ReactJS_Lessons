import React from "react";

export const MessageField = ({messages}) => {
    return <div className="message-field border mb-2">
        {messages.map((message, key) =>
            <div key={key}>
                {message.userID} > {message.text}
            </div>
        )}
    </div>
}