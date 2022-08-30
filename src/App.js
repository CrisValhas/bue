import React from "react";

// css
import './App.css';

// components
import Nav from "./components/Nav";
import AnimatedRoutes from "./components/AnimatedRoutes";


function App() {
  return (
    <div className="App">
      <div className="app-nav">
        <Nav />
      </div>

      {/* RUTEO DE COMPONENTES */}
      <div className="app-home">
          <AnimatedRoutes/>
      </div>

    </div>
  );
}

export default App;
