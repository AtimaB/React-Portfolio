import React, { Component } from "react";
import Card from "./Card";
import projects from "./projects.json";
import "materialize-css/dist/css/materialize.min.css";
import Covid from "./works/home.jpg";
import Fight from "./works/fight.png";
import Password from "./works/password.png";
import Calendar from "./works/calendar.jpg";
import Burger from "./works/burger.png";
import Note from "./works/note.png";
import Employee from "./works/employeeTracker.gif";
import Readme from "./works/readme.gif";
import Team from "./works/team.gif";
import Navbar from "../Navbar";
import Footer from "../Footer";
import _ from "lodash";
class Portfolio extends Component {
  state = {
    projects,
    projectsImg: [
      Covid,
      Fight,
      Password,
      Calendar,
      Burger,
      Note,
      Employee,
      Readme,
      Team,
    ],
  };
  render() {
    console.log(projects);
    return (
      <div>
        <Navbar />

        <h1 id="portfolio1" style={{ marginTop: "60px", marginRight: "90px" }}>
          Portfolio
        </h1>

        <div className="row" style={{ margin: "20px" }}>
          {_.zip(this.state.projects, this.state.projectsImg).map((app) => (
            <Card
              key={app[0].id}
              name={app[0].name}
              detail={app[0].detail}
              img={app[1]}
              deployLink={app[0].deployLink}
              githubLink={app[0].githubLink}
            />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}
export default Portfolio;
