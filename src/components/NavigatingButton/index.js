import arrowSVG from "../../assets/icons/arrow.svg";
import "./index.scss";

const NavigatingButton = ({ rotate }) => {
  return (
    <div className="navigating-button">
      <img src={arrowSVG} alt="arrow" />
    </div>
  );
};

export default NavigatingButton;
