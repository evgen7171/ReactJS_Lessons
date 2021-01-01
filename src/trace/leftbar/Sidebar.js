import React from 'react'
import {Link} from "react-router-dom";
import {SideBarWrapper} from "./SideBarWrapper";

export const Sidebar = () => {
    const sidebarItems = [
        {title: 'Моя страница', link: '/user'},
        {title: 'Новости', link: '/feed'},
        {title: 'Мессенджер', link: '/im'}
    ];

    return <SideBarWrapper>
        {sidebarItems.map((item, key) =>
            <Link key={key} to={item.link}
                  className="list-group-item-action p-1 mb-1 btn">
                {item.title}
            </Link>
        )}
    </SideBarWrapper>
}