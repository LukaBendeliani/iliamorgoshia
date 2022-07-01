import { useHistory } from "react-router-dom";
import arrowSVG from "../../assets/icons/arrow-white.svg";
import "./index.scss";

const BackButton = () => {
  const history = useHistory();

  return (
    <div className="back-button" onClick={history.goBack}>
      <img src={arrowSVG} alt="arrow" />
    </div>
  );
};

export default BackButton;
