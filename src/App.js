import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Home} from "./pages/Home";
import {Chats} from "./pages/Chats";
import {Profile} from "./pages/Profile";
import {withLogo} from "./pages/wrapper/withLogo";
import {ContextMenuState} from "./context/contextMenu/ContextMenuState";

function App() {

    const history = React.history;
    const HomeWithLogo = withLogo(Home);
    const ProfileWithLogo = withLogo(Profile);
    const ChatsWithLogo = withLogo(Chats);

    return (
        <ContextMenuState>
                <BrowserRouter>
                    <Switch>
                        <Route history={history} path="/" exact component={HomeWithLogo}/>
                        <Route history={history} path="/profile" component={ProfileWithLogo}/>
                        <Route history={history} path="/chat" component={ChatsWithLogo}/>
                    </Switch>
                </BrowserRouter>
        </ContextMenuState>
    );
}

export default App;
