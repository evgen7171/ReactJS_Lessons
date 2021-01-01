import React from "react";
import {Header} from "../Header";
import ContentRoute from "../private/ContentRoute";
import News from "../private/Content/News";
import {SidebarLogin} from "../leftbar/SidebarLogin";

export const Default = () => {
    return <div className="container">

        <Header/>
        <div className="row pt-3">
            <SidebarLogin/>
            <ContentRoute path='/'
                          ContentComponent={News}/>
        </div>
    </div>
}