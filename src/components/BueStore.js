import React from "react";
import { Link } from "react-router-dom";

// css
import "./styles/BueStore.css";

// animation
import { motion } from 'framer-motion';

// assets
import store from "../assets/bue-store/tienda.png";

export default function BueStore () {
    return (
        <motion.div className="BueStore"
            initial={{ width: "0vw", x: "50vw", opacity: 0, transition: { duration: 1.3 } }}
            animate={{ width: "100vw", x: "0vw", scale: 1, opacity: 1, transition: { duration: 1.3 } }}
            exit={{ width: "0vw", x: "50vw", opacity: 0, transition: { duration: 0.5 } }}
        >

            <Link to="/">Back</Link>

            <div className="buestore-content">
                
                <div className="buestore-text">
                    <p className="buestore-title">TiendaBue!</p>
                    <p className="buestore-description">¿Tienes un emprendimiento y necesitas una tienda online?</p>
                    <p className="buestore-description">Contamos con varios planes para vos</p>
                </div>
                
                <div className="buestore-bg">
                    <img className="buestore-imgs" src={store} alt="store" />
                </div>
                
            </div>

        </motion.div>
        
    )
};