import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import Index from "./components/pages/index";
import "./App.css";
import Wrapper from "./components/Wraper";
// import WhatIDo from "./components/WhatIDo";
// import Portfolio from "./components/Portfolio/projects";
// import Contact from "./components/Contact/index";
// import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Index} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
