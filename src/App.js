import React from "react";
import { Route, Routes } from "react-router-dom";

// css
import './App.css';

// components
import Nav from "./components/Nav";
import Home from "./components/Home";
import BueStore from "./components/BueStore";
import About from "./components/About";
import Projects from "./components/Projects";
import Webs from "./components/Webs";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Nav />

      {/* RUTEO DE COMPONENTES */}
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webs" element={<Webs />} />
          <Route path="/BueStore" element={<BueStore />}  />
          <Route path="/about" element={<About />}  />
          <Route path="/projects" element={<Projects />}  />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
