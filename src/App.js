import React, { Component } from "react";
// import { HashRouter as Router, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
// import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
