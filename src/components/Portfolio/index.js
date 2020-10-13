import React, { Component } from "react";
// get materialize imports
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <section className="container-section scrollspy" id="portfolio">
          <h1
            id="portfolio1"
            style={{ marginTop: "60px", marginRight: "90px" }}
          >
            Portfolio
          </h1>
        </section>
      </div>
    );
  }
}

export default Portfolio;
