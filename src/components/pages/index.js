import React, { Component } from "react";
// get materialize imports
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Navbar from "../Navbar";
import Header from "../Header";
import myImg from "../AboutMe/photo.jpg";
import {
  FaFileDownload,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import Resume from "../WhatIDo/Resume.pdf";
import Footer from "../Footer";

class Index extends Component {
  componentDidMount() {
    M.Tabs.init(this.Tabs);
  }
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <section className="section container scrollspy" id="aboutMe">
          <div className="row">
            <div className="col s12 m5 l5">
              <span className="flow-text">
                <img
                  src={myImg}
                  alt="atima's img"
                  style={{ width: "250px", height: "250px" }}
                />
              </span>
            </div>

            <div className="col s12 m7 l7">
              <p>
                I am a Full Stack Web Developer and a photographer. I live in
                Draper, Utah. I am originally from Thailand. I love traveling. I
                love snowboarding, hiking, biking and going for a walk.
                <br />
                <br />I graduated in bachelor’s degree in Chinese culture and
                Language from Silpakorn University, Thailand. I was a barista
                and assistance manager at Starbucks and the General Store at
                Jackson Hole Mountain Resort.
                <br />
                <br />
                In 2015,I moved to California, I was a graphic designer, a
                photographer and a marketing for Do Good Distillery.
              </p>
            </div>
          </div>
        </section>
        <section className="container-section scrollspy" id="contact1">
          <h1
            id="contact"
            style={{
              marginTop: "60px",
              marginLeft: "90px",
              marginBottom: "30px",
            }}
          >
            Contact
          </h1>
          <div
            className="row scrollspy"
            style={{
              backgroundColor: "rgba(12, 12, 12, 0.801)",
              width: "80%",
              padding: "20px",
            }}
          >
            <div className="container">
              <div className="col s12 m12 l6">
                <h5>Contact Information</h5>
                <br />
                <a id="mail" href="mailto: nickzehn10@hotmail.com">
                  <FaEnvelope /> : nickzehn10@hotmail.com
                </a>
                <br />
                <br />
                <a id="tel" href="tel:3074139336">
                  <FaPhoneAlt /> : 307-413-9336
                </a>
                <br />
                <a
                  className="btn-small"
                  href={Resume}
                  download="Resume"
                  style={{
                    marginTop: "40px",
                    marginBottom: "20px",
                    backgroundColor: "#1d9eda",
                  }}
                >
                  <FaFileDownload /> My Resume
                </a>
              </div>
              <div className="s12 m12 l6">
                <h5>Follow me : </h5>
                <a href="https://www.facebook.com/atima.oum">
                  <FaFacebookSquare id="media" />
                </a>
                <a href="https://www.instagram.com/oumatima/?hl=en">
                  <FaInstagramSquare id="media" />
                </a>
                <a href="https://twitter.com/atima_oum">
                  <FaTwitterSquare id="media" />
                </a>
                <a href="https://github.com/AtimaB">
                  <FaGithubSquare id="media" />
                </a>
                <a href="https://www.linkedin.com/in/atima-bennett-712ab01a6/">
                  <FaLinkedin id="media" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default Index;
