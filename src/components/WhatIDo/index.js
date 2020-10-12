import React, { Component } from "react";
// get materialize imports
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
// get fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import all icons
import {
  faFileDownload,
  faWindowMaximize,
  faCamera,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

class WhatIDo extends Component {
  componentDidMount() {
    M.Tabs.init(this.Tabs);
  }
  render() {
    return (
      <div className="container">
        <section className="section container scrollspy" id="services">
          <div className="row">
            <div className="col s12 l4">
              <h2 style={{ color: "#1d9eda" }}>What I do...</h2>
              <p>I am a Full Stack Web Developer and a Photographer.</p>
              <a
                className="btn-small"
                href=""
                download="Resume"
                style={{
                  marginTop: "30px",
                  marginBottom: "20px",
                  backgroundColor: "#1d9eda",
                }}
              >
                <FontAwesomeIcon icon={faFileDownload} /> My Resume
              </a>
            </div>
            <div className="col s12 l6 offset-l2">
              <ul
                ref={(Tabs) => {
                  this.Tabs = Tabs;
                }}
                id="tabs-swipe-demo"
                className="tabs"
                style={{ marginTop: "5px;" }}
              >
                <li className="tab col s6">
                  <a href="#web">
                    <FontAwesomeIcon icon={faWindowMaximize} /> Web Developer
                  </a>
                </li>
                <li className="tab col s6">
                  <a href="#photo">
                    <FontAwesomeIcon icon={faCamera} /> Photographer
                  </a>
                </li>
              </ul>
            </div>
            <div className="col s12 l6 offset-l2">
              <div id="web" className="col s12">
                <p
                  className="flow-text"
                  style={{ textAlign: "center", marginTop: "10px" }}
                >
                  <FontAwesomeIcon
                    icon={faWindowMaximize}
                    style={{ color: "#1d9eda" }}
                  />
                  Web Developer
                </p>
                <p>I am a Full Stack Web Developer.</p>

                <p style={{ fontSize: "20px" }}>My Skills</p>
                <ul id="skills">
                  <li style={{ fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faCaretRight} /> HTML
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faCaretRight} /> CSS
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faCaretRight} /> JavaScript
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faCaretRight} /> JQuery
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faCaretRight} /> Node.js
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faCaretRight} /> MySQL
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faCaretRight} /> MongoDB
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faCaretRight} /> Sequelize
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faCaretRight} /> Express.js
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faCaretRight} /> React
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faCaretRight} /> Express-Handlebars
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faCaretRight} /> CSS Framework :
                    Boostrap and Materilaize
                  </li>
                </ul>
              </div>
              <div id="photo" className="col s12">
                <p
                  className="flow-text"
                  style={{ textAlign: "center", marginTop: "10px" }}
                >
                  <FontAwesomeIcon
                    icon={faCamera}
                    style={{ color: "#1d9eda" }}
                  />
                  Photographer
                </p>
                <p>
                  I take ourdoors pictures, weddings, birthday parties and
                  family photoes.
                </p>

                <p style={{ fontSize: "20px" }}>My Skills</p>
                <ul id="skills">
                  <li style={{ fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faCaretRight} /> Adobe LightRoom
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faCaretRight} /> Adobe PhotoShop
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faCaretRight} /> Adobe Illustrator
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    <FontAwesomeIcon icon={faCaretRight} /> Adobe InDesign
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WhatIDo;
