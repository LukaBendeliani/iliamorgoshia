import { useRef } from "react";
import { useHistory } from "react-router-dom";
import SwitchButton from "../../components/SwitchButton";
import arrowSVG from "../../assets/icons/arrow-white.svg";
import handSVG from "../../assets/images/hand-video.svg";
import arrowRightWhiteSVG from "../../assets/icons/arrow-right-whtie.svg";
import happiness from "../../assets/images/hap.svg";
import ephemerels from "../../assets/images/ephemerels.svg";
import "./index.scss";
import "../ArtDirector/index.scss";

const workItems = [
  {
    title: "The Path to Happiness",
    desc: "Documentary Film",
    link: "/happiness",
    background: "#000",
    img: happiness,
  },
  {
    title: "Coming Soon",
    desc: "Short Film",
    link: "/videography",
    background: "#000",
    img: ephemerels,
  },
];

const Videography = () => {
  const workRef = useRef();
  const history = useHistory();

  const handleNavigate = (url) => {
    history.push(url);
    window.scrollTo(0, 0);
  };

  const moveToWork = () => {
    workRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SwitchButton />

      <div className="videography">
        <img alt="hand" src={handSVG} className="videography__hand"></img>
        <div className="videography__introduction">
          <h1>Videography</h1>
          <p>Editing, Producing, directing</p>
          <h3>
            I am an Self Taught Videographer from Georgia, Tbilisi. My Passsion is Film.
          </h3>
          <span className="scroll" onClick={moveToWork}>
            <button className="scroll__arrow" style={{ cursor: "pointer" }}>
              <img src={arrowSVG} style={{ width: "28px" }} alt="arrow" />
            </button>
            <p>Scroll down</p>
          </span>
        </div>
        <div className="videography-work" ref={workRef}>
          <h1 style={{ marginTop: "180px" }}>WORK</h1>
        </div>
        <div className="videography-work-items">
          {workItems.map(({ title, desc, img, background, link }, index) => (
            <div
              className="videography-work-items__item "
              onClick={() => handleNavigate(link)}
              key={index}
            >
              <div
                className="videography-work-items__item__img"
                style={{ background }}
              >
                <img src={img} style={{ transform: "scale(1.2)" }} alt={title} />
              </div>
              <div className="videography-work-items__item__content ">
                <h2>{title}</h2>
                <p>{desc}</p>
                <img
                  src={arrowRightWhiteSVG}
                  alt="arrow pointing right"
                  className="arrow-right "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Videography;
