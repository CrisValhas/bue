import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import "./styles/Webs.css"
import gbottom from "../assets/webs-media/globos-bottom.png"
import gmid from "../assets/webs-media/globos-mid.png"
import gtop from "../assets/webs-media/globos-top.png"

export default function Webs() {
    return (



        <motion.div className="Webs"
            initial={{ color:"white", width: "0vw", x: "50vw", opacity: 0, scale: 0.8, transition: { duration: 1.3 } }}
            animate={{ width: "100vw", x: "0vw", scale: 1, opacity: 1, transition: { duration: 1.3 } }}
            exit={{ width: "0vw", x: "50vw", opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
        >
            <div className="Webs-container">
                <Link className="Back" to="/">Back</Link>
                {/* ------------------------------option 1---------------------------------- */}
                
                <motion.div className="Webs-options-container"
                    initial={{ width: "0vw", x: "-90vw", scale: 1.5 }}
                    animate={{ width: "100%", x: 0, scale: 1 }}
                    transition={{ duration: 0.7, origin: 1 }}
                    exit={{ width: "0vw", x: "-90vw", scale: 1.5 }}
                >
                    <div className="Webs-options">
                    {/* <img className="webs-img" src={gtop} alt="gtop"/> */}
                        <p>Son paginas web de estilo portfolio o contacto, sirven para que la gente te conozca, a vos o tu proyecto y pueda contactarte. Generar presencia en la Web es importante!</p>
                    </div>
                    <motion.div className="Webs-icon"
                        initial={{ width: "0vw", x: 0, scale: 1.5 }}
                        animate={{ width: "16%", x: 0, }}
                        transition={{ duration: 1.5, origin: 1 }}
                    >
                        <p>Simple</p>
                    </motion.div>
                </motion.div>
                {/* ------------------------------option 2---------------------------------- */}
                <motion.div className="Webs-options-two-container"
                    initial={{ width: "0vw", x: "90vw", scale: 1.5 }}
                    animate={{ width: "100%", x: 0, scale: 1 }}
                    transition={{ duration: 0.7, origin: 1 }}
                    exit={{ width: "0vw", x: "90vw", scale: 1.5 }}
                >
                    <div className="Webs-options-two">
                        {/* <img className="webs-img" src={gmid} alt="gmid"/> */}
                        <p>Una pagina web completisima! con mails, posibilidad qu</p>
                    </div>
                    <motion.div className="Webs-icon"
                        initial={{ width: "0vw", x: 0, scale: 1.5 }}
                        animate={{ width: "16%", x: 0, }}
                        transition={{ duration: 1.5, origin: 1 }}
                    >
                        <p>Medium</p>
                    </motion.div>
                    
                </motion.div>
                {/* ------------------------------option 3---------------------------------- */}
                <motion.div className="Webs-options-container"
                    initial={{ width: "0vw", x: "-90vw", scale: 1.5 }}
                    animate={{ width: "100%", x: 0, scale: 1, }}
                    transition={{ duration: 0.7, origin: 1 }}
                    exit={{ width: "0vw", x: "-90vw", scale: 1.5 }}
                >
                    {/* <img className="webs-img" src={gbottom} alt="gbottom"/> */}
                    <div className="Webs-options">
                    
                    <p>hola jorgue como estas</p>
                    </div>
                    <motion.div className="Webs-icon"
                        initial={{ width: "0vw", x: 0, scale: 1.5 }}
                        animate={{ width: "16%", x: 0, }}
                        transition={{ duration: 1.5, origin: 1 }}
                    >
                        <p >Advanced</p>
                    </motion.div>
                </motion.div>

            </div>

        </motion.div>
    )
};