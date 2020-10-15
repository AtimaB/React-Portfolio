import React from "react";
// get materialize imports
import "materialize-css/dist/css/materialize.min.css";
//import image
import myImg from "./photo.jpg";

const AboutMe = () => {
  return (
    <div>
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
              love snowboarding, hiking, biking and going for a walks.
              <br />
              <br />I graduated with a bachelor’s degree in Chinese Culture and
              Language from Silpakorn University, Thailand. I was a barista and
              assistant manager at Starbucks in Jackson Hole, Wyoming. I was an
              assistant manager at the General Store at Jackson Hole Mountain
              Resort Teton Village, Wyoming.
              <br />
              <br />
              In 2015,I moved to California, I was a graphic designer and a
              photographer for Do Good Distillery.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
