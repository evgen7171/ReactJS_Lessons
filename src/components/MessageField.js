import React, {Fragment} from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import {Message} from "./Message";

export const MessageField = ({children, messages}) => {
    return <>
        <div>
            <List>
                {messages.map((message, key) =>
                    <Fragment key={key}>
                        <Message message={message}/>
                        {
                            key !== messages.length - 1 &&
                            <Divider variant="inset" component="li"/>
                        }
                    </Fragment>
                )}
            </List>
        </div>
        <div>{children}</div>
    </>
}