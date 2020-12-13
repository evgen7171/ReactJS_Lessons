import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import {ChatList} from "./ChatList";
import {MessageField} from "./MessageField";
import {SideBar} from "./SideBar";
import {ControlPanel} from "./ControlPanel";
import {MessageController} from "./MessageController";
import {getChatMessages} from "./DataFunctions";
import {useStyles} from './useStyles'
import {chat_id_default, messagesArray} from '../data/data'
import {robotWatch} from "./robotWatch";

function Layout(props) {
    // стили
    const classes = useStyles();
    const {window} = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    // чат
    const [chatId, selectChatId] = useState(chat_id_default);
    // сообщения
    const [messages, changeMessages] = useState(messagesArray);
    const messagesByChatId = getChatMessages(messages, chatId);
    const messageController = MessageController(messages, chatId, changeMessages)
    // робот
    const [controlAction, setControlAction] = useState(false);
    useEffect(() => {
        robotWatch(chatId, messages, changeMessages, controlAction, setControlAction)
    }, [messages, chatId, controlAction])

    return (
        <div className={classes.root}>
            <SideBar chat_id={chatId}
                     container={container}>
                <ChatList toolbarClasses={classes.toolbar}
                          chatId={chatId}
                          selectChatId={selectChatId}/>
            </SideBar>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <MessageField chatId={chatId}
                              messages={messagesByChatId}>
                    <div className={classes.footer}>
                        <ControlPanel controller={messageController} setControlAction={setControlAction}/>
                    </div>
                </MessageField>
            </main>
        </div>
    );
}

Layout.propTypes = {
    window: PropTypes.func,
};

export default Layout;