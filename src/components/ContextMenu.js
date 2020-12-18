import React, {useContext} from "react";
import {ContextMenuContext} from "../context/contextMenu/ContextMenuContext";

export const ContextMenu = ({coords, isMyMessage}) => {
    // const styles = {
    //     left: coords.x + 'px',
    //     top: coords.y + 'px'
    // }
    const {contextMenu, hide} = useContext(ContextMenuContext);
    const contextItems = contextMenu;
    console.log(contextItems)
    return <ul className="context-menu">
        {
            // contextItems.map((item, key) => (
            //     <li className="context-menu-item"
            //         key={key} onClick={()=>console.log(item)}>{item}</li>
            // ))
        }
    </ul>
}