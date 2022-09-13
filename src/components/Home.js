import React from "react";
import { Link } from "react-router-dom";

// css
import "./styles/Home.css";

import { motion } from 'framer-motion';

// language
import { useSelector } from "react-redux";

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
                    <div className="home-cards-img">
                        <img src={webs} alt="test" />
                    </div>

                    <div className="home-cards-content">
                        <h1>{lang.Home.webs.title}</h1>
                        <h2>{lang.Home.webs.subtitle}</h2>
                    </div>
                </Link>

                {/* BUESTORE */}
                <Link to="/BueStore" className="home-cards">
                    <div className="home-cards-img">
                        <img src={store} alt="test" />
                    </div>

                    <div className="home-cards-content">
                        <h1>{lang.Home.store.title}</h1>
                        <h2>{lang.Home.store.subtitle}</h2>
                    </div>
                </Link>

                {/* ABOUT */}
                <Link to="/about" className="home-cards">
                    <div className="home-cards-img">
                        <img src={about} alt="test" />
                    </div>

                    <div className="home-cards-content">
                        <h1>{lang.Home.about.title}</h1>
                        <h2>{lang.Home.about.subtitle}</h2>
                    </div>
                </Link>

                {/* PROJECTS */}
                <Link to="/projects" className="home-cards">
                    <div className="home-cards-img">
                        <img src={projects} alt="test" />  
                    </div>

                    <div className="home-cards-content">
                        <h1>{lang.Home.projects.title}</h1>
                        <h2>{lang.Home.projects.subtitle}</h2>
                    </div>
                </Link>

            </div>
        </motion.div>
    )
};