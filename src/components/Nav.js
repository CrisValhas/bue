import React from "react";

// css
import "./styles/Nav.css";

// assets
import logo from "../assets/test-logo.png";

import { motion } from 'framer-motion';

export default function Nav () {
    return (
        <div className="Nav">
            <motion.div
                initial={{ width: "50vw", x: "-70vw", scale: 1.5 }}
                animate={{ width: "50vw", x: 0, scale: 1 }}
                transition={{ duration: 0.5, origin: 1 }}
            >
                <img className="Nav-logo" src={logo} alt="logo" />
            </motion.div>
        </div>
    )
};