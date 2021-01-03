import React from 'react'
import {Route} from "react-router-dom";
import {Header} from "./components/Header";
import {Sidebar} from "./components/Sidebar";
import News from "./components/Content/News";
import Profile from "./components/Content/Profile";
import Messenger from "./components/Content/Messenger/Messenger";

function App() {
    return (
        <div className="container">
            <header className="row border border-primary pt-2 pb-2">
                <div className="col-3">Logo</div>
                <Header/>
            </header>
            <div className="row pt-3">
                <Sidebar/>
                <Route path={['/', '/feed']} exact component={News}/>
                <Route path='/user' exact component={Profile}/>
                <Route path='/im/:chatID' exact component={Messenger}/>
                <Route path='/im' exact component={Messenger}/>
            </div>
        </div>
    );
}

export default App
