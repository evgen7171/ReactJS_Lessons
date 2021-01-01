import React from 'react'
import {Route} from 'react-router-dom'
import Home from "./components/Home";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import AuthSwitch from "./router";
import Private from "./components/Private";

const PublicRoute = ({...props}) => <Route {...props}/>
const PrivateRoute = ({...props}) => <Route {...props}/>

function App() {
    return (
        <AuthSwitch>
            <PrivateRoute path="/" component={Private}/>
            <PublicRoute path="/" exact component={Home}/>
            <PublicRoute path="/login" exact component={Login}/>
            <PublicRoute path="/signup" exact component={Signup}/>
        </AuthSwitch>
    );
}

export default App
