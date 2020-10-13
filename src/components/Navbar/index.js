import React, { Component } from "react";
// get materialize imports
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import logoImg from "./ablogoWhite.png";
class Navbar extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      let elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems, {});
    });
  }
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div
            className="nav-wrapper"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.918)",
              paddingBottom: "10px",
              paddingTop: "10px",
            }}
          >
            <a href="#" data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <a href="#" class="brand-logo" style={{ fontSize: "20px" }}>
              <img
                src={logoImg}
                alt="atima's logo"
                style={{
                  marginLeft: "60px",
                  width: "60px",
                  height: "50px",
                }}
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
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <ul id="slide-out" className="sidenav">
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
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
