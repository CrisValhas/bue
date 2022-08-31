import React from "react";
import { Link } from "react-router-dom";

// css
import "./styles/BueStore.css";

// animation
import { motion } from 'framer-motion';

// assets
import store from "../assets/bue-store/store-2017.png";
import sales from "../assets/bue-store/price-tag-2320.png";
import supp from "../assets/bue-store/customer-support-12581.png";

export default function BueStore () {
    return (
        <motion.div className="BueStore"
            initial={{ width: "0vw", x: "50vw", opacity: 0, transition: { duration: 1.3 } }}
            animate={{ width: "100vw", x: "0vw", scale: 1, opacity: 1, transition: { duration: 1.3 } }}
            exit={{ width: "0vw", x: "50vw", opacity: 0, transition: { duration: 0.5 } }}
        >

            <div className="buestore-content">
                
                <div className="buestore-text">
                    <Link className="buestore-links" to="/">←</Link>
                    <span className="buestore-title">Empieza a vender <span style={{textDecoration: "underline", textDecorationColor: "#ffc401"}}>gratis</span></span>
                    <div className="buestore-description">
                        <span>Potente y fácil de usar. Sin gastos y no es necesario configurarlo. No se necesita tarjeta de crédito. Configura tu cuenta gratuita una vez y mantenla todo el tiempo que quieras. Exactamente lo que se supone que significa "gratis".</span>
                    </div>
                    <button className="buestore-btn">Ir a TiendaBue!</button>
                </div>

                
                <div className="buestore-boxes">

                    <div className="buestore-box">
                        <img className="buestore-imgs" src={store} alt="store" />
                        <div className="buestore-box-info">
                            <span className="buestore-box-title">Personaliza tu tienda</span>
                            <span className="buestore-box-label">Pon tu logo, combina colores y adapta la web de manera fácil.</span>
                        </div>
                    </div>

                    <div className="buestore-box">
                        <img className="buestore-imgs" src={sales} alt="store" />
                        <div className="buestore-box-info">
                            <span className="buestore-box-title">Vende sin comisiones</span>
                            <span className="buestore-box-label">Único plan, todo incluído, no cobramos comisiones por las ventas.</span>
                        </div>
                    </div>

                    <div className="buestore-box">
                        <img className="buestore-imgs" src={supp} alt="store" />
                        <div className="buestore-box-info">
                            <span className="buestore-box-title">Soporte</span>
                            <span className="buestore-box-label">Brindamos soporte ante cualquier eventualidad.</span>
                        </div>
                    </div>
                    
                </div>
                
                
            </div>

        </motion.div>
        
    )
};