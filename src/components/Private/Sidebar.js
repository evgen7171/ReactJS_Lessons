import React from "react";
import {Link} from "react-router-dom";
import {sidebar} from "../../config/sidebar";

export const Sidebar = () => {
    const side = sidebar;
    return <nav className="sidebar-left p-2">
        <ul className="nav flex-column position-sticky pt-2">
            {side.map((item, key) => {
                return <Link to={item.link} key={key}>{item.title}</Link>
            })}
        </ul>
    </nav>
}