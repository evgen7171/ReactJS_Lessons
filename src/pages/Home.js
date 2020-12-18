import React from "react";
import {Link} from "react-router-dom";

export const Home = () => {

    return <>
        <div className="form-control form-group bg-white messages-field border-primary">
            <Link to="/">Главная</Link>
            <Link to="/chat">Мессенджер</Link>
            <Link to="/profile">Профиль</Link>
        </div>
    </>
}