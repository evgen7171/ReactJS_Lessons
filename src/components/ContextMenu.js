import React, {useContext} from "react";
import {ContextMenuContext} from "../context/contextMenu/ContextMenuContext";

/**
 * модуль контекстного меню
 * @returns {JSX.Element|null}
 * @constructor
 */
export const ContextMenu = () => {
    const {contextMenu} = useContext(ContextMenuContext);
    if (!contextMenu.items) {
        return null
    }
    return <>
        {/*<ul className="context-menu">*/}
        {/*    {*/}
        {/*        contextMenu.items.map((item, key) => (*/}
        {/*            <li className="context-menu-item"*/}
        {/*                key={key} onClick={() => console.log(item)}>{item}</li>*/}
        {/*        ))*/}
        {/*    }*/}
        {/*</ul>*/}
    </>
}