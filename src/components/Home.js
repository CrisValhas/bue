import React from "react";
import { Link } from "react-router-dom";

// css
import "./styles/Home.css";

import { motion } from 'framer-motion';

export default function Home () {
    return (
        <motion.div className="Home"

        initial={{scale:0, transition:{duration:0.1}}}
        animate={{x: 0,scale:1}}
        // exit={{opacity:0, transition:{duration:0.1}}}
        >
            {/* NAVEGACIÓN */}
            <div className="home-container">
                <Link to="/webs" className="home-cards"><div className="home-cardsline"></div><p className="home-cardslabel">Webs</p></Link>
                <Link to="/BueStore" className="home-cards"><div className="home-cardsline"></div><p className="home-cardslabel">TiendaBue!</p></Link>
                <Link to="/about" className="home-cards"><div className="home-cardsline"></div><p className="home-cardslabel">Quienes somos</p></Link>
                <Link to="/projects" className="home-cards"><div className="home-cardsline"></div><p className="home-cardslabel">ProyectosBue!</p></Link>
            </div>
        </motion.div>
    )
};