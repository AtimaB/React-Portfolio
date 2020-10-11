import React, { Component } from "react";
// get materialize imports
import "materialize-css/dist/css/materialize.min.css";

class Navbar extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
  }
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div
            className="nav-wrapper"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.918)" }}
          >
            <a href="#" data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <a href="" class="brand-logo" style={{ fontSize: "20px" }}>
              <img
                src="./assets/ablogoWhite.png"
                alt="atima's logo"
                style={{ marginTop: "10px", width: "60", height: "50" }}
              />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="#">About Me</a>
              </li>
              <li>
                <a href="#">What I Do...</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
            </ul>
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
