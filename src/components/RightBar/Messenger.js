import React, {useEffect} from 'react';
import {Link, useParams, Redirect} from "react-router-dom";
import {removeStoreChat} from "../../context/actions";
import {store} from '../../index';

export const Messenger = () => {

    const selectedChatID = +useParams().chatID;

    const getChats = () => store.getState() ?
        store.getState().openedChats : [];

    const removeChat = e => {
        // window.location.href = '/';
        const chatID = +e.target.id.substr(5);
        if(chatID === selectedChatID){
            window.location.href = '/im'
        }
        store.dispatch(removeStoreChat(chatID));

        // return <Redirect to="/im"/>
    }

    const chatLinks = [
        {title: 'все чаты', link: '/im', default: true},
        ...getChats(),
        {title: 'добавить чаты', link: '/', default: true}
    ]

    return <>
        {chatLinks.map((chat, key) =>
            <div key={key}
                 className="d-flex align-items-center justify-content-between">
                <Link to={chat.link}
                      className="list-group-item-action btn">
                    <div>{chat.title}</div>
                </Link>
                {
                    !chat.default &&
                    <div className="btn btn-sm border"
                         id={`chat-${chat.id}`}
                         onClick={removeChat}
                    >&times;</div>

                }
            </div>
        )}
    </>
}