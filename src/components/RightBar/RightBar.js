import React from 'react';
import {Messenger} from "./Messenger";
import {News} from "./News";

export function RightBar({componentName, param}) {
    switch (componentName) {
        case 'Messenger':
            return <Messenger param={param}/>
        case 'News':
            return <News param={param}/>
        default:
            return null
    }
}