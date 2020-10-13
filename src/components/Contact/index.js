import React, { Component } from "react";
// get materialize imports
// import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
// get react-fontawesome imports
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

class Contact extends Component {
  render() {
    return (
      <div>
        <section className="container-section scrollspy" id="contact1">
          <h1 id="contact" style={{ marginTop: "60px", marginLeft: "90px" }}>
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
                  href=""
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
      </div>
    );
  }
}

export default Contact;
