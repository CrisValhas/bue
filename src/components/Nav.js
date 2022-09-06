import React from "react";

// css
import "./styles/Nav.css";

// assets
import logo from "../assets/test-logo.png";

// language
import { useDispatch } from "react-redux";
import esp from "../assets/extras/esp.png";
import eng from "../assets/extras/eng.png";
import { setLanguage } from "../redux/slice";

import { motion } from 'framer-motion';

export default function Nav () {
    const dispatch = useDispatch();

    return (
        <div className="Nav">
            <motion.div
                initial={{ width: "50vw", x: "-70vw", scale: 1.5 }}
                animate={{ width: "50vw", x: 0, scale: 1 }}
                transition={{ duration: 0.5, origin: 1 }}
                className="nav-container-motion"
            >

                <div className="nav-container-logo">
                    <img className="nav-logo" src={logo} alt="logo" />
                </div>
                
                <div className="nav-container-lang">
                    <img title="ESP" className="nav-lang-icons" src={esp} alt='iconESP' onClick={() => dispatch(setLanguage("ESP"))} />
                    <img title="ESP" className="nav-lang-icons" src={eng} alt='iconENG' onClick={() => dispatch(setLanguage("ENG"))} />
                </div>

            </motion.div>
        </div>
    )
};