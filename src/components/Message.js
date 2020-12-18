import React, {useCallback, useEffect, useRef, useState} from "react"
import {MessageUserIcon} from "./MessageUserIcon";
import {getColorByUserID, getUserByMessage, myID} from "./utils";
import {ContextMenu} from "./ContextMenu";

export const Message = ({message}) => {
    const user = getUserByMessage(message);
    const color = getColorByUserID(user.id);
    const isMineMessage = useCallback(message => myID === message.userID, []);
    const [classes, setClasses] = useState("message-text-in");
    const targetRef = useRef();

    useEffect(() => {
        const elem = targetRef.current
        if (parseInt(getComputedStyle(elem).lineHeight) < elem.offsetHeight && classes === "message-text-in") {
            setClasses(classes + " text-justify")
        }
    }, [classes, message])

    return <>
        {
            !isMineMessage(message) ?

                <div className="row ml-0 mr-0">
                    <div className="message-user p-0">
                        <div className="mr-1">
                            <MessageUserIcon color={color}/>
                        </div>
                        {user.name}
                    </div>
                    <div className="message-text">
                        {/*<RobotMessagePreloader>*/}
                        {/*todo анимация*/}
                        <div className={classes} ref={targetRef}>{message.text}</div>
                        {/*</RobotMessagePreloader>*/}
                    </div>
                </div>

                :

                <div className="row ml-0 mr-0 flex-row-reverse">
                    <div className="message-user-right ml-1">
                        <MessageUserIcon color={color}/>
                    </div>
                    <div className="message-text-mine text-right">
                        {/*todo анимация*/}
                        <div className={classes} ref={targetRef}>{message.text}</div>
                    </div>
                </div>
        }
        <ContextMenu/>
    </>
}

