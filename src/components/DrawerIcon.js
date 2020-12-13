import React from "react";
import RemoveFromQueueIcon from "@material-ui/icons/RemoveFromQueue";
import FaceIcon from "@material-ui/icons/Face";
import SettingsIcon from "@material-ui/icons/Settings";

export function DrawerIcon(props) {
    switch (props.iconKey) {
        case 0:
            return <RemoveFromQueueIcon/>;
        case 1:
            return <FaceIcon/>;
        case 2:
            return <SettingsIcon/>;
        default:
            return <></>;
    }
}