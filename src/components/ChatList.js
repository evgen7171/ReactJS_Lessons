import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {ChatListItem} from "./ChatItem";
import {chats} from "../data/data";

export const ChatList = ({toolbarClasses, selectChatId, chatId}) => {
    return (<>
            <div className={toolbarClasses}>
                <Toolbar>
                    <Typography
                        variant="h6" noWrap>
                        Список чатов</Typography>
                </Toolbar>
            </div>
            <Divider/>
            <List>
                {chats.map((chat, key) => (
                    <ChatListItem key={key} title={chat.title}
                                  id={chat.id} selectChatId={selectChatId}
                                  chatId={chatId}
                    />
                ))}
            </List>
        </>
    )
}