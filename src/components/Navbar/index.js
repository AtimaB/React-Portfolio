import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
// import { BrowserRouter, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import { HashLink as Link } from "react-router-hash-link";
import logoImg from "./ablogoWhite.png";

class Navbar extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {});
  }

  render() {
    return (
      <div className="navbar-fixed-top">
        <nav>
          <div className="nav-wrapper">
            <div className="container">
              <Link
                smooth
                to="/#aboutMe"
                data-target="slide-out"
                className="sidenav-trigger"
              >
                <i className="material-icons">menu</i>
              </Link>
              <Link
                smooth
                to="/#aboutMe"
                className="brand-logo"
                style={{ fontSize: "20px" }}
              >
                <img
                  src={logoImg}
                  alt="atima's logo"
                  style={{
                    width: "60px",
                    height: "50px",
                  }}
                />
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link smooth to="/#aboutMe">
                    About Me
                  </Link>
                </li>

                <li>
                  <Link smooth to="/#services">
                    What I Do...
                  </Link>
                </li>
                <li>
                  <Link smooth to="/#portfolio">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link smooth to="/#contact1">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ul id="slide-out" className="sidenav">
          <li>
            <Link smooth to="/#aboutMe">
              About Me
            </Link>
          </li>
          <li>
            <Link smooth to="/#services">
              What I Do...
            </Link>
          </li>
          <li>
            <Link smooth to="/#portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link smooth to="/#contact1">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
