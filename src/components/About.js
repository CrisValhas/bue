import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export default function About () {
    return (
        <motion.div className="About"
        initial={{scale:0, transition:{duration:0.1}}}
        animate={{x: 0,scale:1}}
        // exit={{opacity:0, transition:{duration:0.1}}}
        >
            <Link to="/">Back</Link>
        </motion.div>
    )
};