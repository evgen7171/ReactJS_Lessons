import React from "react";
import {store} from "../App";

const AuthSwitch = ({children}) => {
    const auth = store.getState().authReducer.auth;
    const getComponentName = Component => Component.type.name;
    return <>{
        children.map(Component => {
            if (!auth && getComponentName(Component) === "PrivateRoute") {
                return null;
            }
            if (auth && getComponentName(Component) === "PublicRoute") {
                return null;
            }
            return Component;
        })
    }
    </>
}

export default AuthSwitch