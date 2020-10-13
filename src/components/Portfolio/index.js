import React, { Component } from "react";
// get materialize imports
// import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
// import { FaGithubSquare, FaWindowMaximize } from "react-icons/fa";
//Covid
import Covid from "./works/home.jpg";

class Portfolio extends Component {
  render() {
    return (
      <div className="row" style={{ margin: "20px" }}>
        <div className="col s12 m4 l4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img class="activator" src="images/office.jpg" />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                Card Title<i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a href="#">This is a link</a>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Card Title<i className="material-icons right">close</i>
              </span>
              <p>
                Here is some more information about this product that is only
                revealed once clicked on.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
