import {makeStyles} from "@material-ui/core/styles";

const DRAWER_WIDTH = 240;
const MAIN_COLOR = "rgba(11, 84, 152, 0.8)"
const SIDEBAR_ITEM_COLOR_ACTIVE = "#57c6ef"

export const useStyles = makeStyles(
    (theme) => ({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: DRAWER_WIDTH,
                flexShrink: 0,
            },
        },
        appBar: {
            backgroundColor: MAIN_COLOR,
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${DRAWER_WIDTH}px)`,
                marginLeft: DRAWER_WIDTH,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        menuButtonActive: {
            backgroundColor: SIDEBAR_ITEM_COLOR_ACTIVE,
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: DRAWER_WIDTH,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        footer: {
            position: 'absolute',
            bottom: '1rem',
            width: `calc(100% - 3rem)`,
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${DRAWER_WIDTH}px - 3rem)`,
            },
        },
        controlButton: {
            backgroundColor: MAIN_COLOR
        }
    })
);