import React from "react";
import {formConfig} from "./pages/modal/formConfig";

export const centerComponent = (Component, componentName) => {
    const config = formConfig[componentName]
    return function () {
        return <div className="container d-flex justify-content-center mt-5 mb-5">
            <div className="wrap-border">
                <Component config={config}/>
            </div>
        </div>
    }
}