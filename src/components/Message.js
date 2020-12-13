import React from "react";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {getUserNameByMessage, isMineMessage} from "./DataFunctions";

export const Message = ({message}) => {
    const userName = getUserNameByMessage(message);
    const isMine = isMineMessage(message);

    return <ListItem alignItems="flex-start">
        {!isMine &&
        <ListItemAvatar>
            <Avatar alt={userName} src="/static/images/avatar/avatar.jpg"/>
        </ListItemAvatar>
        }
        <ListItemText
            primary={!isMine && userName}
            secondary={
                <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className="d-inline"
                        color="textPrimary"
                    >
                        >>&nbsp;
                    </Typography>
                    {message.text}
                </React.Fragment>
            }
        />
        {isMine &&
        <ListItemAvatar>
            <Avatar alt={userName} src="/static/images/avatar/avatar.jpg"/>
        </ListItemAvatar>
        }
    </ListItem>
}