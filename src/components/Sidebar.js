import React from 'react'
import {Link} from "react-router-dom";

export const Sidebar = () => {
    const sidebarItems = [
        {title: 'Моя страница', link: '/user'},
        {title: 'Новости', link: '/feed'},
        {title: 'Мессенджер', link: '/im'}
    ];

    return <aside className="col-3 p-0 overflow-auto">
        {sidebarItems.map((item, key) =>
            <Link key={key} to={item.link}
                  className="list-group-item-action p-1 mb-1 btn">
                {item.title}
            </Link>
        )}
    </aside>
}