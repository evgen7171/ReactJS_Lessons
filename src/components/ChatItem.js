import React from "react";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {DrawerIcon} from "./DrawerIcon";
import {useStyles} from "./useStyles";

export const ChatListItem = ({title, id, selectChatId, chatId}) => {
    const classes = useStyles();
    const selectChat = () => {
        selectChatId(id);
    }
    const styles = chatId === id ? classes.menuButtonActive : '';
    return (<ListItem button onClick={selectChat} className={styles}>
        <ListItemIcon>
            <DrawerIcon iconKey={id}/>
        </ListItemIcon>
        <ListItemText primary={title}/>
    </ListItem>)
}