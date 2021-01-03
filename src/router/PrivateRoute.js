import {Component} from "react";
import {Route} from "react-router-dom";

function PrivateRoute({component: Component, auth, ...rest}) {
    return <Route
        {...rest}
        render={
            props => auth && <Component {...props}/>
        }
    />
}

export default PrivateRoute