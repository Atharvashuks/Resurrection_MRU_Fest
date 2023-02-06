import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./container";
import { Navbar } from "./components";
import Home from "./Pages/Home";
import Sponsors from "./Pages/Sponsors/Sponsors";
import Team from "./Pages/Teams/Team";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Sponsors" exact element={<Sponsors />} />
        <Route path="/Team" exact element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
