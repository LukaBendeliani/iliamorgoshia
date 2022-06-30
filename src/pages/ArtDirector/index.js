import arrowSVG from "../../assets/icons/arrow-white.svg";
import arrowRightWhiteSVG from "../../assets/icons/arrow-right-whtie.svg";

import handSVG from "../../assets/images/hand.svg";
import vodkaSVG from "../../assets/images/vodka.svg";
import foxySVG from "../../assets/images/foxy.svg";
import bookcoverSVG from "../../assets/images/book-cover.svg";
import indeedSVG from "../../assets/images/indeed.svg";
import uiuxworkSVG from "../../assets/images/uiuxwork.svg";

import "./index.scss";
import { useHistory } from "react-router-dom";

const ArtDirector = () => {
  const history = useHistory();
  const workItems = [
    {
      title: "Mango Flavored Vodka",
      desc: "Concept Design of Vodka Packiging",
      link: "/vodka",
      background: "#000",
      img: vodkaSVG,
    },
    {
      title: "Foxy Browser Branding",
      desc: "Concept Branding For browser",
      link: "/foxy",
      background: "#000",
      img: foxySVG,
    },
    {
      title: "Book Cover",
      desc: "Design art for Audio book",
      link: "/book-cover",
      background: "#fff",
      img: bookcoverSVG,
    },
    {
      title: "Indeed Campaign",
      desc: "Posters",
      link: "/indeed",
      background: "#fff",
      img: indeedSVG,
    },
    {
      title: "UX/UI Work",
      desc: "Website Designe",
      link: "/uiuxwork",
      background: "#fff",
      img: uiuxworkSVG,
    },
  ];

  const handleNavigate = (url) => history.push(url);

  return (
    <div className="artdirector">
      <div className="content">
        <div className="content__left">
          <h1>Art Direction</h1>
          <p className="content__left__skills">UI/UX, Design, Concepting</p>
          <p className="content__left__desc">
            I am an Freelancer from Georgia, Tbilisi. I am currently studying in
            Miami Ad School.
          </p>

          <span className="scroll">
            <button>
              <img src={arrowSVG} alt="arrow" />
            </button>
            <p>Scroll down</p>
          </span>
        </div>
        <div className="content__right">
          <img src={handSVG} alt="hand" />
        </div>
      </div>
      <div className="work">
        <h1>WORK</h1>
      </div>
      <div className="work-items">
        {workItems.map(({ title, desc, img, background, link }) => (
          <div
            className="work-items__item"
            onClick={() => handleNavigate(link)}
          >
            <div className="work-items__item__img" style={{ background }}>
              <img src={img} alt={title} />
            </div>
            <div className="work-items__item__content">
              <h2>{title}</h2>
              <p>{desc}</p>
              <img src={arrowRightWhiteSVG} alt="arrow pointing right" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtDirector;
