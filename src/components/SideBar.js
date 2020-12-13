import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import {useStyles} from "./useStyles";
import {useTheme} from "@material-ui/core/styles";
import {chats} from "../data/data";

// todo classes для Drawer убрать в одно место
export const SideBar = ({children, container, chat_id}) => {
    // стили
    const classes = useStyles();
    const theme = useTheme();
    const classesDrawer = {paper: classes.drawerPaper}
    // логика
    const chat_title = chats.find(chat => chat.id === chat_id).title
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (<>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap>
                    {chat_title}
                </Typography>
            </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={classesDrawer}
                    ModalProps={{
                        keepMounted: true,
                    }}>
                    {children}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={classesDrawer}
                    variant="permanent"
                    open>
                    {children}
                </Drawer>
            </Hidden>
        </nav>
    </>)
}