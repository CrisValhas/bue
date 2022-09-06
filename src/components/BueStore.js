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

// language
import { useSelector } from "react-redux";
import { ESP } from "../lang/esp";
import { ENG } from "../lang/eng";

export default function BueStore () {
    const lang = useSelector((state) => state.rootReducer.lang);

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
                    <span className="buestore-title">{lang === "ESP" ? ESP.BueStore.title : ENG.BueStore.title} <span style={{textDecoration: "underline", textDecorationColor: "#ffc401"}}>{lang === "ESP" ? ESP.BueStore.titleFree : ENG.BueStore.titleFree}</span></span>
                    <div className="buestore-description">
                        <span>{lang === "ESP" ? ESP.BueStore.description : ENG.BueStore.description}</span>
                    </div>
                    <button className="buestore-btn" onClick={() => alert('Proximamente')}>{lang === "ESP" ? ESP.BueStore.button : ENG.BueStore.button}</button>
                </div>

                {/* BOXES */}
                <div className="buestore-boxes">
                    <div className="buestore-box">
                        <img className="buestore-imgs" src={store} alt="store" />
                        <div className="buestore-box-info">
                            <span className="buestore-box-title">{lang === "ESP" ? ESP.BueStore.box[1].title : ENG.BueStore.box[1].title}</span>
                            <span className="buestore-box-label">{lang === "ESP" ? ESP.BueStore.box[1].text : ENG.BueStore.box[1].text}</span>
                        </div>
                    </div>

                    <div className="buestore-box">
                        <img className="buestore-imgs" src={sales} alt="store" />
                        <div className="buestore-box-info">
                            <span className="buestore-box-title">{lang === "ESP" ? ESP.BueStore.box[2].title : ENG.BueStore.box[2].title}</span>
                            <span className="buestore-box-label">{lang === "ESP" ? ESP.BueStore.box[2].text : ENG.BueStore.box[2].text}</span>
                        </div>
                    </div>

                    <div className="buestore-box">
                        <img className="buestore-imgs" src={supp} alt="store" />
                        <div className="buestore-box-info">
                            <span className="buestore-box-title">{lang === "ESP" ? ESP.BueStore.box[3].title : ENG.BueStore.box[3].title}</span>
                            <span className="buestore-box-label">{lang === "ESP" ? ESP.BueStore.box[3].text : ENG.BueStore.box[3].text}</span>
                        </div>
                    </div>
                </div>

                {/* END */}
                <div className="buestore-end">
                    <div className="buestore-end-text">
                        <span style={{fontSize: "50px", fontFamily: "Impact", color: "white"}}>{lang === "ESP" ? ESP.BueStore.extra.title : ENG.BueStore.extra.title}</span>  
                        <span style={{fontSize: "50px", fontFamily: "Impact", color: "#ffc401", marginTop: "-15px"}}>{lang === "ESP" ? ESP.BueStore.extra.subtitle : ENG.BueStore.extra.subtitle}</span>
                        <div className="buestore-end-description">
                            <span>{lang === "ESP" ? ESP.BueStore.extra.description[1] : ENG.BueStore.extra.description[1]}</span>
                            <br/>
                            <span>{lang === "ESP" ? ESP.BueStore.extra.description[2] : ENG.BueStore.extra.description[2]}</span>
                            <span>{lang === "ESP" ? ESP.BueStore.extra.description[3] : ENG.BueStore.extra.description[3]}</span>
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