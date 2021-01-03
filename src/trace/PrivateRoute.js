import React from "react";
import {Header} from "./Header";
import {Sidebar} from "./leftbar/Sidebar";
import ContentRoute from "./private/ContentRoute";
import News from "./private/Content/News";
import {NewsBar} from "./private/RightBar/NewsBar";
import Profile from "./private/Content/Profile";
import Messenger from "./private/Content/Messenger";
import {MessengerBar} from "./private/RightBar/MessengerBar";

export const PrivateRoute = () => {
    return (
        <div className="container">
            <header className="row border border-primary pt-2 pb-2">
                <div className="col-3">Logo</div>
                <Header/>
            </header>
            <div className="row pt-3">
                <Sidebar/>
                <ContentRoute path={['/', '/feed']} exact
                              ContentComponent={News}
                              RightBarComponent={NewsBar}/>
                <ContentRoute path='/user'
                              ContentComponent={Profile}/>
                <ContentRoute path='/im'
                              ContentComponent={Messenger}
                              RightBarComponent={MessengerBar}/>
            </div>
        </div>
    )
}