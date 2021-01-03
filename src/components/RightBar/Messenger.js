import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {store} from '../../index';
import {MessengerLink} from "./MessengerLink";

export const Messenger = () => {

    const defaultLinks = [
        {title: 'все чаты', link: '/im'},
        {title: 'добавить чаты', link: '/'}
    ];

    const selectedChatID = +useParams().chatID;

    const [items, setItems] = useState(store.getState().openedChats)
    useEffect(()=>{
        setItems(store.getState().openedChats)
    },[store.getState().openedChats])

    return <>
        <MessengerLink chat={defaultLinks[0]} defaultChat/>
        {
            items &&
            items.map((chat, key) =>
                <MessengerLink chat={chat} key={key}
                               isSelectedChat={chat.id === selectedChatID}/>
            )}
        <MessengerLink chat={defaultLinks[1]} defaultChat/>
    </>
}