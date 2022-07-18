import { Carousel } from "3d-react-carousal";
import BackButton from "../../components/BackButton";

import indeedLogo from "../../assets/images/indeed/logo.png";
import indeed1 from "../../assets/images/indeed/indeed1.png";
import indeed2 from "../../assets/images/indeed/indeed2.png";
import indeed3 from "../../assets/images/indeed/indeed3.png";

import "./index.scss";

const Indeed = () => {
  const slides = [
    <img src={indeed1} alt="indeed carousel 1" />,
    <img src={indeed2} alt="indeed carousel 2" />,
    <img src={indeed3} alt="indeed carousel 3" />,
  ];

  return (
    <div className="indeed">
      <BackButton />
      <div className="indeed__logo">
        <img src={indeedLogo} alt="indeed logo" />
      </div>
      <div className="indeed__content">
        <h1>Indeed Print Campign</h1>
        <p>
          Date: 29/05/2022
          <br />
          Role: Art Director
          <br />
          Credit: Savina Mokreva
        </p>
      </div>
      <Carousel slides={slides} />
      <p className="indeed__desc">
        Ever felt like you were not suitable for your job? Sometimes people tend to change their personalities to fit into a job. This campaign, indeed, is relatable for people like that. Indeed claims that you need to do one search to find a job suitable for you.
      </p>
    </div>
  );
};

export default Indeed;
