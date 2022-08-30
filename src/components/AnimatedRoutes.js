import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// components
import Home from "./Home";
import BueStore from "./BueStore";
import About from "./About";
import Projects from "./Projects";
import Webs from "./Webs";
import NotFound from "./NotFound";
import Nav from "./Nav";

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <div>
            <AnimatePresence>
                <Nav />
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/webs" element={<Webs />} />
                    <Route path="/BueStore" element={<BueStore />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default AnimatedRoutes