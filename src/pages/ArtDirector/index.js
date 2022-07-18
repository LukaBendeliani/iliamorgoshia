import { useRef } from "react";
import { useHistory } from "react-router-dom";
import SwitchButton from "../../components/SwitchButton";

import vodka from "../../assets/images/vodka/mango-flavored-vodka.jpg";
import foxy from "../../assets/images/foxy/foxy.png";
import bookcover from "../../assets/images/book-cover/book-cover.png";
import indeed from "../../assets/images/indeed/indeed.png";
import uiuxwork from "../../assets/images/uiux/uiuxwork.png";
import arrowSVG from "../../assets/icons/arrow-white.svg";
import arrowRightWhiteSVG from "../../assets/icons/arrow-right-whtie.svg";
import handSVG from "../../assets/images/hand.svg";

import "./index.scss";

const workItems = [
  {
    title: "Mango Flavored Vodka",
    desc: "Concept Design of Vodka Packiging",
    link: "/vodka",
    background: "#000",
    img: {
      src: vodka,
      width: 417,
      height: 235,
    },
  },
  {
    title: "Foxy Browser Branding",
    desc: "Concept Branding For browser",
    link: "/foxy",
    background: "#000",
    img: {
      src: foxy,
      width: 230,
      height: 275,
    },
  },
  {
    title: "Book Cover",
    desc: "Design art for Audio book",
    link: "/book-cover",
    background: "#fff",
    img: {
      src: bookcover,
      width: 563,
      height: 421,
    },
  },
  {
    title: "Indeed Campaign",
    desc: "Posters",
    link: "/indeed",
    background: "#fff",
    img: {
      src: indeed,
      width: 552,
      height: 394,
    },
  },
  {
    title: "UX/UI Work",
    desc: "Website Designe",
    link: "/uiuxwork",
    background: "#fff",
    img: {
      src: uiuxwork,
      width: 356,
      height: 250,
    },
  },
];

const ArtDirector = () => {
  const workRef = useRef();
  const history = useHistory();

  const scrollToWork = () => {
    workRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleNavigate = (url) => {
    history.push(url);
    window.scrollTo(0, 0);
  };

  return (
    <>
    <SwitchButton />
    <div className="artdirector">
      <div className="content">
        <div className="content__left">
          <h1>Art Direction</h1>
          <p className="content__left__skills">UI/UX, Design, Concepting</p>
          <p className="content__left__desc">
            I am an Freelancer from Georgia, Tbilisi.
            I am currently studying in Miami Ad School.
          </p>
          <span className="scroll" onClick={scrollToWork}>
            <button className="scroll__arrow" style={{ cursor: "pointer" }}>
              <img src={arrowSVG} alt="arrow" />
            </button>
            <p>Scroll down</p>
          </span>
        </div>
        <div className="content__right">
          <img src={handSVG} alt="hand" />
        </div>
      </div>
      <div className="work" ref={workRef}>
        <h1>WORK</h1>
      </div>
      <div className="work-items">
        {workItems.map(({ title, desc, img, background, link }, index) => (
          <div
            className="work-items__item"
            onClick={() => handleNavigate(link)}
            key={index}
          >
            <div className="work-items__item__img" style={{ background }}>
              <img {...img} alt={title} />
            </div>
            <div className="work-items__item__content">
              <h2>{title}</h2>
              <p>{desc}</p>
              <img
                src={arrowRightWhiteSVG}
                alt="arrow pointing right"
                className="arrow-right"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ArtDirector;
