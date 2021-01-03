import {Component, Fragment} from "react";
import {useLocation} from "react-router-dom";
import {Sidebar} from "./Sidebar";
import {Header} from "./content/Header";
import {News} from "./content/News";
import {Profile} from "./content/Profile";
import Messenger from "./content/Messenger";
import {Friends} from "./content/Friends";
import {NotFound} from "./content/NotFound";
import {hideMenu} from "./content/Header/utils";

const ContentSwitch = ({children}) => {
    const pathname = useLocation().pathname;
    const map = children.map((item, key) => {
        if (pathname === item.props.path) {
            return <Fragment key={key}>{item}</Fragment>;
        }
        if (key === children.length - 1) {
            return <NotFound key={key}/>
        }
    })
    if (map.filter(item => item).length === 1) {
        return map[map.length - 1];
    } else {
        map.pop();
        return map;
    }
}

const ContentRoute = ({path, component: Component}) => {
    const pathname = useLocation().pathname;
    if (pathname === '/' && path === '/feed') {
        return <Component/>;
    }
    return pathname === path && <Component/>;
}

export const Private = () => {
    return <div className="container vh-100 p-0" onClick={hideMenu}>
        <Header/>
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>
                <div className="col-6 pt-3">
                    <ContentSwitch>
                        <ContentRoute path='/' component={News}/>
                        <ContentRoute path='/feed' component={News}/>
                        <ContentRoute path='/user' component={Profile}/>
                        <ContentRoute path='/im' component={Messenger}/>
                        <ContentRoute path='/friends' component={Friends}/>
                    </ContentSwitch>
                </div>
            </div>
        </div>
    </div>
}

export default Private;