import React from "react";
import {Register} from "./pages/Register";
import {Sign} from "./pages/Sign";

export const PublicRoute = () => {
    return (
        <div className="container d-flex justify-content-center mt-5 mb-5">
            <Register/>
            <Login/>
        </div>
    )
}