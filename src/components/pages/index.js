import React, { Component } from "react";
// get materialize imports
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Navbar from "../Navbar";
import Header from "../Header";
import Portfolio from "../Portfolio/projects";
import Footer from "../Footer";
import WhatIDo from "../WhatIDo";
import AboutMe from "../AboutMe";
import Contact from "../Contact";

class Index extends Component {
  componentDidMount() {
    M.Tabs.init(this.Tabs);
  }
  render() {
    return (
      <div>
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
export default Index;
