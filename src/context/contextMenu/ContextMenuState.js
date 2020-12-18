import React, {useReducer} from "react";
import {contextMenuReducer} from "./contextMenuReducer";
import {ContextMenuContext} from "./ContextMenuContext";
import {hideContextByMessage, showContextByMyMessage, showContextByNotMyMessage} from "./actions";

export const ContextMenuStateContainerState = ({children}) => {
    const [state, dispatch] = useReducer(
        contextMenuReducer,
        {visible: false, coords: null}
    )

    const showContext = (e, isMyMessage) =>
        isMyMessage ?
            dispatch(showContextByMyMessage(e)) :
            dispatch(showContextByNotMyMessage(e));
    const hideContext = () => dispatch(hideContextByMessage())

    const leftClick = e =>{
        e.preventDefault();
        hideContext()
        // ![...e.target.classList].indexOf("context-menu-item") || hideContext()
    }
    const rightClick = e =>{
        e.preventDefault();
    }
    return (
        <ContextMenuContext.Provider value={{
            showContext, hideContext,
            contextMenu: state
        }}>
            <div onClick={e=>leftClick(e)}
            onContextMenu={e=>rightClick(e)}>
                {children}
            </div>
        </ContextMenuContext.Provider>
    )
}