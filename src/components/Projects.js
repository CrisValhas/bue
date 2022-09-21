import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import "./styles/Projects.css"
import PuntayHacha from "../assets/projects-media/PuntayHacha.png"

export default function Projects () {
    return (
        <motion.div 
            className="Projects"
            initial={{opacity:0.4, transition:{duration:0.1}}}
            animate={{opacity:1, transition:{duration:0.7}}}
        >
            <Link to="/"><button>←</button></Link>
            <div className="projects-container">   
                <motion.div className="projects-item">  
                    <a href="https://www.puntayhacha.com.ar">
                        <div className="tile">
                            <h3>Punta y Hacha</h3>
                            <div className="text">
                                <img src={PuntayHacha} alt="proyect1"/>
                                <p className="animate-text">SPA para productora de alimentos orgánicos</p>
                            </div>
                        </div>
                    </a>
                </motion.div>
            </div>
        </motion.div>
    )
};