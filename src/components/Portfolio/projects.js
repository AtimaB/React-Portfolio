import React, { Component } from "react";
import Card from "./Card";
import projects from "./projects.json";
import "materialize-css/dist/css/materialize.min.css";
import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer";
class Portfolio extends Component {
  state = {
    projects,
  };
  render() {
    return (
      <div>
        <Navbar />

        <h1 id="portfolio1" style={{ marginTop: "60px", marginRight: "90px" }}>
          Portfolio
        </h1>
        <div className="row" style={{ margin: "20px" }}>
          {this.state.projects.map((app) => (
            <Card
              key={app.id}
              name={app.name}
              detail={app.detail}
              img={app.img}
              deployLink={app.deployLink}
              githubLink={app.githubLink}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default Portfolio;
