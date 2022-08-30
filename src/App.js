import React from "react";

// css
import './App.css';

// components
import AnimatedRoutes from "./components/AnimatedRoutes";


function App() {
  return (
    <div className="App">
      {/* RUTEO DE COMPONENTES */}
      <div className="app-home">
          <AnimatedRoutes/>
      </div>

    </div>
  );
}

export default App;
