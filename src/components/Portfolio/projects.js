import React, { Component } from "react";
import Card from "./Card";
// import JSON file for all the projects
import projects from "./projects.json";
// import Materialize
import "materialize-css/dist/css/materialize.min.css";
// import all the images for the projects
import Covid from "./works/home.jpg";
import Fight from "./works/fight.png";
import Password from "./works/password.png";
import Directory from "./works/employeeDirectory.png";
import Burger from "./works/burger.png";
import Note from "./works/note.png";
import Workout from "./works/cardio.png";
import Budget from "./works/budget.png";
import Employee from "./works/employeeTracker.gif";
import Readme from "./works/readme.gif";
import Team from "./works/team.gif";
import Trade1 from "./works/trade1.png";
import _ from "lodash";
class Portfolio extends Component {
  state = {
    projects,
    projectsImg: [
      Covid,
      Fight,
      Trade1,
      Password,
      Directory,
      Burger,
      Note,
      Workout,
      Budget,
      Employee,
      Readme,
      Team,
    ],
  };
  render() {
    console.log(projects);
    return (
      <div>
        <h1 id="portfolio1" style={{ marginTop: "60px", marginRight: "90px" }}>
          Portfolio
        </h1>

        <div className="row">
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
      </div>
    );
  }
}
export default Portfolio;
