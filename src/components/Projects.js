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
            <div className="projects-back-container">
                <Link className="projects-back" to="/">Back</Link>
            </div>
            <motion.div
                className="projects-container"
                initial={{opacity:0}}
                animate={{opacity:1, transition:{duration:0.6}}}
            >   
                <motion.div 
                    className="projects-item"
                >  
                    <a href="https://www.puntayhacha.com.ar">
                        
                        <div className="tile">
                                <h3>React SPA</h3>
                                <div className="text">
                                <img src={PuntayHacha} className="projects-item-background" alt="proyect1"/>
                                    <h1>PuntayHacha</h1>
                                    <h2 className="animate-text">agosto - 2022</h2>
                                    <p className="animate-text">Primer proyecto de bue!</p>
                                </div>
                            </div>
                    </a>
                </motion.div>
            </motion.div>
        </motion.div>
    )
};