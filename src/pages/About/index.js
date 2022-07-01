import ilia from "../../assets/images/about/ilia.png";
import lines from "../../assets/images/about/lines.png";

import "./index.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__left">
        <img src={ilia} alt="ilia morgoshia" />
        <img src={lines} alt="lines" />
      </div>
      <div className="about__right">
        <h1>About Me </h1>
        <p>
          Hi im an Aspiring Art director and videographer. in my life i
          struggled to choose my proffesion, but i knew for sure that i whanted
          to do somthing where i could use my creativity.{" "}
        </p>
        <p>
          I Really believe that i can show you what visual art is all about. im
          very motivated to create new things that i can proudly name as mine.
          <br />
          <br />
          Want to work with me ?{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
