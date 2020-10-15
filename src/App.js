import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import Index from "./components/pages/index";
import "./App.css";

import Wrapper from "./components/Wraper";
import WhatIDo from "./components/WhatIDo";
import Portfolio from "./components/Portfolio/projects";
import Contact from "./components/Contact/index";

import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Index} />
          <Route exact path="/aboutMe" component={AboutMe} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/services" component={WhatIDo} />
          <Route exact path="/contact1" component={Contact} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
