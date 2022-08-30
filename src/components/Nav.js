import React from "react";
// css
import "./styles/Nav.css";

import logo from "../assets/test-logo.png";

export default function Nav () {
    return (
        <div className="Nav">
            <img className="Nav-logo" src={logo} alt="logo" />
        </div>
    )
};