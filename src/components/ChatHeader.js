import React from "react";
import {useParams} from "react-router-dom";
import {getChatTitle} from "./utils";

/**
 * заголовок/название чата
 * @returns {JSX.Element}
 * @constructor
 */
export const ChatHeader = () => {
    const chatID = +useParams().chatID;
    const chatTitle = getChatTitle(chatID);
    // if(!chatTitle){
    //     return <Redirect to="/"/>
    // }
    return <label className="mb-2 mt-2 text-center w-100 h4">{chatTitle}</label>
}