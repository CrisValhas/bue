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
import lock from "../assets/bue-store/login-password-11923.png";
import cash from "../assets/bue-store/coin-794.png";
import box from "../assets/bue-store/box-9153.png";

export default function BueStore () {
    return (
        <motion.div className="BueStore"
            initial={{ width: "0vw", x: "50vw", opacity: 0, transition: { duration: 1.3 } }}
            animate={{ width: "100vw", x: "0vw", scale: 1, opacity: 1, transition: { duration: 1.3 } }}
            exit={{ width: "0vw", x: "50vw", opacity: 0, transition: { duration: .3 } }}
        >

            <div className="buestore-content">
                
                {/* TEXT */}
                <div className="buestore-text">
                    <Link className="buestore-links" to="/">←</Link>
                    <span className="buestore-title">Empieza a vender <span style={{textDecoration: "underline", textDecorationColor: "#ffc401"}}>gratis</span></span>
                    <div className="buestore-description">
                        <span>Potente y fácil de usar. Sin gastos y no es necesario configurarlo. No se necesita tarjeta de crédito. Configura tu cuenta gratuita una vez y mantenla todo el tiempo que quieras. Exactamente lo que se supone que significa "gratis".</span>
                    </div>
                    <button className="buestore-btn" onClick={() => alert('Proximamente')}>Ir a TiendaBue!</button>
                </div>

                {/* BOXES */}
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

                {/* END */}
                <div className="buestore-end">
                    <div className="buestore-end-text">
                        <span style={{fontSize: "50px", fontFamily: "Impact", color: "white"}}>60 días</span>  
                        <span style={{fontSize: "50px", fontFamily: "Impact", color: "#ffc401", marginTop: "-15px"}}>sin costo</span>
                        <div className="buestore-end-description">
                            <span>Si es la primera vez que creas una cuenta en nuestra tienda te regalamos los primeros 60 días del servicio.</span>
                            <span>Familiarizate con nuestra app sin costo alguno, sabemos que luego de este tiempo, te vas a quedar!</span>
                        </div>
                    </div>
                    <div className="buestore-bg-icons">
                        <img className="buestore-bg-img" src={box} alt="box" />
                        <img className="buestore-bg-img" src={cash} alt="cash" />
                        <img className="buestore-bg-img" src={lock} alt="lock" />
                    </div>  
                </div>
                
                
            </div>

        </motion.div>
        
    )
};