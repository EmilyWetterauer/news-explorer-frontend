import React from "react";

import "./About.css";

const About = () => {
  return (
    <div className="about__container">
      <div className="about__avatarImage"></div>
      <div className="about__textContainer">
        <h2 className="about__headerText">About the author</h2>
        <p className="about__paragraphText">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className="about__paragraphText">
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
};

export default About;
