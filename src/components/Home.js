import React from "react";
import { Link } from "react-router-dom";

// css
import "./styles/Home.css";

import { motion } from 'framer-motion';

// language
import { useSelector } from "react-redux";
import { ESP } from "../lang/esp";
import { ENG } from "../lang/eng";

// assets
import webs from "../assets/extras/web-4288.png";
import about from "../assets/extras/about.png";
import store from "../assets/extras/store.png";
import projects from "../assets/extras/projects.png";

export default function Home () {
    const lang = useSelector((state) => state.rootReducer.lang);

    return (
        <motion.div className="Home"
            initial={{ width: "0vw", x: "50vw", opacity:0,scale: 0.8,transition:{duration:1.3} }}
            animate={{ width: "100vw", x: "0vw", scale: 1,opacity:1, transition:{duration:1.3}}}
            >

            {/* NAVEGACIÓN */}
            <div className="home-container">

                {/* WEBS */}
                <Link to="/webs" className="home-cards">
                    <motion.div 
                        initial={{ width: "0vw", x: "50vw", opacity:0,scale: 0.8,transition:{duration:1.3} }}
                        animate={{ width: "100vw", x: "0vw", scale: 1,opacity:1, transition:{duration:1.3}}}
                        >
                        <img className="home-icon" src={webs} alt="test" />
                    </motion.div>
                    <div className="home-cards-content">
                        <span className="home-cardslabel">{lang === "ESP" ? ESP.Home.webs.title : ENG.Home.webs.title}</span>
                        <span className="home-cardsdetail">{lang === "ESP" ? ESP.Home.webs.subtitle : ENG.Home.webs.subtitle}</span>
                    </div>
                </Link>

                {/* BUESTORE */}
                <Link to="/BueStore" className="home-cards">
                    <motion.div
                        initial={{ width: "0vw", x: "50vw", opacity:0,scale: 0.8,transition:{duration:1.3} }}
                        animate={{ width: "100vw", x: "0vw", scale: 1,opacity:1, transition:{duration:1.3}}}
                        >

                        <img className="home-icon" src={store} alt="test" />
                    </motion.div>
                    <div className="home-cards-content">
                        <span className="home-cardslabel">{lang === "ESP" ? ESP.Home.store.title : ENG.Home.store.title}</span>
                        <span className="home-cardsdetail">{lang === "ESP" ? ESP.Home.store.subtitle : ENG.Home.store.subtitle}</span>
                    </div>
                </Link>

                {/* ABOUT */}
                <Link to="/about" className="home-cards">
                    <motion.div
                        initial={{ width: "0vw", x: "50vw", opacity:0,scale: 0.8,transition:{duration:1.3} }}
                        animate={{ width: "100vw", x: "0vw", scale: 1,opacity:1, transition:{duration:1.3}}}
                    >

                        <img className="home-icon" src={about} alt="test" />
                    </motion.div>
                    <div className="home-cards-content">
                        <span className="home-cardslabel">{lang === "ESP" ? ESP.Home.about.title : ENG.Home.about.title}</span>
                        <span className="home-cardsdetail">{lang === "ESP" ? ESP.Home.about.subtitle : ENG.Home.about.subtitle}</span>
                    </div>
                </Link>

                {/* PROJECTS */}
                <Link to="/projects" className="home-cards">
                    <motion.div
                        initial={{ width: "0vw", x: "50vw", opacity:0,scale: 0.8,transition:{duration:1.3} }}
                        animate={{ width: "100vw", x: "0vw", scale: 1,opacity:1, transition:{duration:1.3}}}
                        >

                        <img className="home-icon" src={projects} alt="test" />
                    </motion.div>
                    <div className="home-cards-content">
                        <span className="home-cardslabel">{lang === "ESP" ? ESP.Home.projects.title : ENG.Home.projects.title}</span>
                        <span className="home-cardsdetail">{lang === "ESP" ? ESP.Home.projects.subtitle : ENG.Home.projects.subtitle}</span>
                    </div>
                </Link>

            </div>
        </motion.div>
    )
};