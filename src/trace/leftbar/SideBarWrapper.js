import React from "react";

export const SideBarWrapper = ({children}) => (
    <aside className="col-3 p-0 overflow-auto position-fixed mt-4 w-25 border">
        {children}
    </aside>
)