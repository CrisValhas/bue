import React from "react";
import { Link } from "react-router-dom";

// css
import "./styles/Home.css";

export default function Home () {
    return (
        <div className="Home">
            {/* NAVEGACIÓN */}
            <div className="home-container">
                <Link to="/webs" className="home-cards">Webs</Link>
                <Link to="/BueStore" className="home-cards">TiendaBue!</Link>
                <Link to="/about" className="home-cards">Quienes somos</Link>
                <Link to="/projects" className="home-cards">ProyectosBue!</Link>
            </div>
        </div>
    )
};