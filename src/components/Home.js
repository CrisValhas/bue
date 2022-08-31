import React from "react";
import { Link } from "react-router-dom";

// css
import "./styles/Home.css";

import { motion } from 'framer-motion';

export default function Home () {
    return (
        <motion.div className="Home"

        initial={{ width: "0vw", x: "50vw", opacity:0,scale: 0.8,transition:{duration:1.3} }}
        animate={{ width: "100vw", x: "0vw", scale: 1,opacity:1, transition:{duration:1.3}}}
        exit={{ width: "0vw", x: "50vw",opacity:0, scale: 0.8 ,transition:{duration:0.5}}}
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