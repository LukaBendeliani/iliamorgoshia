import ilia from "../../assets/images/about/ilia.png";
import lines from "../../assets/images/about/lines.png";
import BackButton from "../../components/BackButton";
import "./index.scss";

const About = () => {
  return (
    <div className="about">
      <BackButton />
      <div className="about__left">
        <img src={ilia} alt="ilia morgoshia" />
        <img src={lines} alt="lines" />
      </div>
      <div className="about__right">
        <h1>About Me </h1>
        <p>
          Hi, I'm an aspiring art director and videographer.
          In my life, I struggled to choose my profession, but
          I knew for sure that I wanted to do something where
          I could use my creativity.
        </p>
        <p>
          I really believe that I can show you what visual art is.
          what it's all about. very motivated to create new things.
          that I can proudly name as mine.

          <br />
          <br />
          Want to work with me ?{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
