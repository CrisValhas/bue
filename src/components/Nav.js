import React, { useState } from "react";
import { motion } from 'framer-motion';

// css
import "./styles/Nav.css";

// assets
import logo from "../assets/test-logo.png";

// language
import { useDispatch } from "react-redux";
import { setLanguage } from "../redux/slice";
import lang from "../assets/extras/lang.png";

export default function Nav () {
    const dispatch = useDispatch();
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="Nav">
            <motion.div
                initial={{ x: "-70vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="nav-container-motion"
            >

                <div className="nav-container-logo">
                    <img className="nav-logo" src={logo} alt="logo" />
                </div>

            </motion.div>

            <div className="nav-lang">
                { isOpen === true ?
                    <motion.div className="nav-lang-container"
                        initial={{ width: "0vw", opacity: 0 }}
                        animate={{ width: "100%", opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        exit={{ width: "0vw" }}
                    >
                        <ul className="nav-lang-container">
                            <li className="nav-lang-container-list" onClick={() => dispatch(setLanguage("ESP"))}><span>ESP</span></li>
                            <li className="nav-lang-container-list" onClick={() => dispatch(setLanguage("ENG"))}><span>ENG</span></li>
                        </ul>
                </motion.div>
                :
                    <div></div>
                }

                <img onClick={() => setOpen(!isOpen)} title="lang" className="nav-lang-icon" src={lang} alt="lang" />      
            </div>
        </nav>
    )
};