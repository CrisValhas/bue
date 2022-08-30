import React from "react";
import { motion } from 'framer-motion';

// css
import "./styles/Footer.css";

export default function Footer () {
    return (
        <motion.div className="Footer"
        initial={{scale:0, transition:{duration:0.1}}}
        animate={{x: 0,scale:1, transition:{duration:0.7}}}
        // exit={{opacity:0, transition:{duration:0.1}}}
        >
            Bue! 2022
        </motion.div>
    )
};