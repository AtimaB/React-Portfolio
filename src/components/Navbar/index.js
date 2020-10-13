import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
// import { BrowserRouter, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import logoImg from "./ablogoWhite.png";

class Navbar extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {});
  }

  render() {
    return (
      <div>
        <nav>
          <div
            className="nav-wrapper"
            style={{
              backgroundColor: "black",
              paddingBottom: "10px",
              paddingTop: "10px",
            }}
          >
            <div className="container">
              <a href="#" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <a href="#" class="brand-logo" style={{ fontSize: "20px" }}>
                <img
                  src={logoImg}
                  alt="atima's logo"
                  style={{
                    width: "60px",
                    height: "50px",
                  }}
                />
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a href="#aboutMe">About Me</a>
                </li>
                <li>
                  <a href="#services">What I Do...</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact1">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ul id="slide-out" className="sidenav">
          <li>
            <a href="#aboutMe">About Me</a>
          </li>
          <li>
            <a href="#services">What I Do...</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact1">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
