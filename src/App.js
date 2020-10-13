import React, { Component } from "react";
// import { HashRouter as Router, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
// import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import WhatIDo from "./components/WhatIDo";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <AboutMe />
        <WhatIDo />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
