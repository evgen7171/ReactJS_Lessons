import React from "react";

export const Loader = ({children, condition}) => {
    return <>{
        condition ? <>{children}</> : <div className="font-italic strong">Loading...</div>
    }</>
}