import React from "react";
import { useSelector } from "react-redux";
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
    const lang = useSelector((state) => state.rootReducer.lang);

    return (
        <motion.div className="BueStore"
            initial={{ width: "0vw", x: "50vw", opacity: 0, transition: { duration: 1.3 } }}
            animate={{ width: "100vw", x: "0vw", scale: 1, opacity: 1, transition: { duration: 1.3 } }}
        >

            <div className="buestore-content">
                
                {/* TEXT */}
                <div className="buestore-text">
                    <Link to="/"><button>←</button></Link>
                    <h1>{lang.BueStore.title} <span>{lang.BueStore.titleFree}</span></h1>
                    <p>{lang.BueStore.description}</p>
                    
                    <button id="bueButton" onClick={() => alert('Proximamente')}>{lang.BueStore.button}</button>
                </div>

                {/* BOXES */}
                <div className="buestore-boxes">
                    <figure>
                        <img src={store} alt="store" />
                        <div>
                            <h1>{lang.BueStore.box[1].title}</h1>
                            <p>{lang.BueStore.box[1].text}</p>
                        </div>
                    </figure>

                    <figure>
                        <img src={sales} alt="store" />
                        <div>
                            <h1>{lang.BueStore.box[2].title}</h1>
                            <p>{lang.BueStore.box[2].text}</p>
                        </div>
                    </figure>

                    <figure>
                        <img src={supp} alt="store" />
                        <div>
                            <h1>{lang.BueStore.box[3].title}</h1>
                            <p>{lang.BueStore.box[3].text}</p>
                        </div>
                    </figure>
                </div>

                {/* END */}
                <div className="buestore-end">
                    <h1>{lang.BueStore.extra.title}</h1>  
                    <h2>{lang.BueStore.extra.subtitle}</h2>

                    <p>{lang.BueStore.extra.description[1]}</p>
                    <br/>
                    <p>{lang.BueStore.extra.description[2]}</p>
                    <p>{lang.BueStore.extra.description[3]}</p>

                    <span>
                        <img src={box} alt="box" />
                        <img src={cash} alt="cash" />
                        <img src={lock} alt="lock" />
                    </span>  
                </div>
                     
            </div>

        </motion.div>
        
    )
};