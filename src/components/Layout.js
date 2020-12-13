import React, {useState} from "react";
import PropTypes from 'prop-types';
import {useTheme} from '@material-ui/core/styles';
import {ChatList} from "./ChatList";
import {MessageField} from "./MessageField";
import {SideBar} from "./SideBar";
import {useStyles} from './useStyles'
import {chats, chat_id} from './data'

function Layout(props) {
    const classes = useStyles();
    const theme = useTheme();
    const {window} = props;
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root} >
            <SideBar chat_id={chat_id} container={container}>
                <ChatList toolbarClasses={classes.toolbar} chats={chats}/>
            </SideBar>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <MessageField/>
            </main>
        </div>
    );
}

Layout.propTypes = {
    window: PropTypes.func,
};

export default Layout;