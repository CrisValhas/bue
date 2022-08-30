import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export default function Projects () {
    return (
        <motion.div className="Projects"
        initial={{scale:0, transition:{duration:0.1}}}
        animate={{x: 0,scale:1, transition:{duration:0.7}}}
        // exit={{opacity:0, transition:{duration:0.1}}}
        >
            <Link to="/">Back</Link>
        </motion.div>
    )
};