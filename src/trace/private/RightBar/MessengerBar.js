import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import MessengerLink from "./MessengerBar/MessengerLink";
import {mapRequestToProps} from "../utils";
import {getChatTitleByPeers} from "../Content/Messenger/utils";
import {mapDispatchToChat} from "../ContentRoute";

export const MessengerBar = () => {


    const location = useLocation();
    const request = mapRequestToProps(location);
    const chatTitle = getChatTitleByPeers(request.peers);

    if (!chatTitle) {
        console.log('site: chats')
    } else {
        console.log('site: chat ' + chatTitle)
        mapDispatchToChat().addChat(request.peersString);
        mapDispatchToChat().showChats();
    }
    // mapDispatchToChat().showChats()
    const [openedChats, setOpenedChats] = useState([])

    const defaultLinks = [
        {title: 'все чаты', link: '/im'},
        {title: 'добавить чат', link: '/'}
    ];

    return <>
        <Link to={defaultLinks[0].link}
              className="list-group-item-action btn">
            <div>{defaultLinks[0].title}</div>
        </Link>
        {
            openedChats.map((chat, key) => chat && <MessengerLink
                chat={chat}
                key={key}/>
            )
        }
        <Link to={defaultLinks[1].link}
              className="list-group-item-action btn">
            <div>{defaultLinks[1].title}</div>
        </Link>
    </>
}