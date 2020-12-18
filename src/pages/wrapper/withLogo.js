import React from 'react';
import {NavLink} from "react-router-dom";
import {LogoComponent} from "./LogoComponent";

export function withLogo(Component) {

    return class extends React.Component {

        render() {
            return <div className="container border border-primary form mt-3 rounded">
                <div className="d-flex w-100">
                    <NavLink to="/" className="d-inline-flex ml-0 mt-1 mb-1 p-1 align-items-center nav-link">
                        <button className="logo-btn logo d-flex">
                            <LogoComponent/>
                            <h4>React Net</h4>
                        </button>
                    </NavLink>
                </div>
                <Component/>
            </div>
        }
    }
}