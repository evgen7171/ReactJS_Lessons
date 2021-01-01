import React from "react";
import ProfileMenu from "./ProfileMenu";

export const Header = () => {
    return <header className="navbar sticky-top flex-md-nowrap p-0 shadow bg-white">
        <div className="navbar-brand header-left p-2 mr-0">React Net</div>
        <div className="float-left d-flex w-100">
            <div className="ml-3">header line...</div>
            <div className="ml-auto mr-3">
                <ProfileMenu/>
            </div>
        </div>
    </header>

}