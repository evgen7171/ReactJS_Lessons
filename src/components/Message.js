import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react"
import {MessageUserIcon} from "./MessageUserIcon";

const colors = ['red', 'blue', 'green']

export const Message = ({message, getUser, user_id_mine}) => {
    const getColor = useCallback(message => colors[getUser(message.user_id).id], [getUser])
    const isMineMessage = useCallback(message => user_id_mine === message.user_id, [user_id_mine])
    const [classes, setClasses] = useState("message-text-in")
    const targetRef = useRef()

    useEffect(() => {
        const elem = targetRef.current
        if (parseInt(getComputedStyle(elem).lineHeight) < elem.offsetHeight && classes==="message-text-in") {
            console.log(parseInt(getComputedStyle(elem).lineHeight), elem.offsetHeight)
            setClasses(classes + " text-justify")
        }
    })

    return (<>
            {!isMineMessage(message) ?

                <div className="row ml-0 mr-0">
                    <div className="message-user">
                        <MessageUserIcon color={getColor(message)}/>
                        {getUser(message.user_id).name}
                    </div>
                    <div className="message-text">
                        {/*<RobotMessagePreloader>*/}
                        <div className={classes} ref={targetRef}>{message.text}</div>
                        {/*</RobotMessagePreloader>*/}
                    </div>
                </div>

                :

                <div className="row ml-0 mr-0 flex-row-reverse">
                    <div className="message-user-right">
                        <MessageUserIcon color={getColor(message)}/>
                    </div>
                    <div className="message-text-mine text-right">
                        <div className={classes} ref={targetRef}>{message.text}</div>
                    </div>
                </div>
            }
        </>
    )
}

