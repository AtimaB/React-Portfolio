import React, { Component } from "react";
// get materialize imports
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
// get react-fontawesome imports
import { FaFileDownload, FaWindowMaximize, FaCamera } from "react-icons/fa";
import Resume from "./Resume.pdf";

class WhatIDo extends Component {
  componentDidMount() {
    M.Tabs.init(this.Tabs);
  }
  render() {
    return (
      <div>
        <h1 id="whatIDo">What I Do ...</h1>
        <section className="section container scrollspy" id="services">
          <div className="row">
            <div className="col s12 l4">
              <p style={{ fontSize: "22px" }}>
                I am a Full Stack Web Developer and a Photographer.
              </p>
              <a
                className="btn-small"
                href={Resume}
                download=""
                style={{
                  marginTop: "30px",
                  marginBottom: "20px",
                  backgroundColor: "#1d9eda",
                }}
              >
                <FaFileDownload /> My Resume
              </a>
            </div>
            <div className="col s12 l6 offset-l2">
              <ul
                ref={(Tabs) => {
                  this.Tabs = Tabs;
                }}
                id="tabs-swipe-demo"
                className="tabs"
                style={{ marginTop: "5px" }}
              >
                <li className="tab col s6">
                  <a href="#web">
                    <FaWindowMaximize /> Web Developer
                  </a>
                </li>
                <li className="tab col s6">
                  <a href="#photo">
                    <FaCamera /> Photographer
                  </a>
                </li>
              </ul>
            </div>
            <div className="col s12 l6 offset-l2">
              <div id="web" className="col s12">
                <br />
                <p style={{ textAlign: "center" }}>
                  {" "}
                  I am a Full Stack Web Developer.
                </p>
                <br />

                <p style={{ fontSize: "20px" }}> My Skills</p>
                <ul id="skills">
                  <li style={{ fontSize: "16px" }}>- HTML</li>
                  <li style={{ fontSize: "16px" }}>- CSS</li>
                  <li style={{ fontSize: "16px" }}>- JavaScript</li>
                  <li style={{ fontSize: "16px" }}>- JQuery</li>
                  <li style={{ fontSize: "16px" }}>- Node.js</li>
                  <li style={{ fontSize: "16px" }}>- MySQL</li>
                  <li style={{ fontSize: "16px" }}>- MongoDB</li>
                  <li style={{ fontSize: "16px" }}>- Sequelize</li>
                  <li style={{ fontSize: "16px" }}>- Express.js</li>
                  <li style={{ fontSize: "16px" }}>- React.js</li>
                  <li style={{ fontSize: "16px" }}>- Express-Handlebars</li>
                  <li style={{ fontSize: "16px" }}>
                    - CSS Framework : Bootstrap and Materilaize
                  </li>
                </ul>
              </div>
              <div id="photo" className="col s12">
                <p style={{ textAlign: "center" }}>
                  {" "}
                  <br />I take ourdoors pictures, weddings, birthday parties and
                  family photoes.
                </p>
                <br />

                <p style={{ fontSize: "20px" }}>My Skills</p>
                <ul id="skills">
                  <li style={{ fontSize: "16px" }}>- Adobe LightRoom</li>
                  <li style={{ fontSize: "16px" }}>- Adobe PhotoShop</li>
                  <li style={{ fontSize: "16px" }}>- Adobe Illustrator</li>
                  <li style={{ fontSize: "16px" }}>- Adobe InDesign</li>
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
