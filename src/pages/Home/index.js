import { Link, useHistory } from "react-router-dom";
import NavigatingButton from "../../components/NavigatingButton";
import iliaSVG from "../../assets/images/ilia.svg";
import "./index.scss";

const Home = () => {
  const history = useHistory();

  return (
    <div className="container">
      <div className="container__left side">
        <div className="container__left__ball side__ball"></div>
        <div className="blured">
          <h1 className="art-director">Art Director</h1>
          <p>UI/UX Design Concepting</p>
          <Link to="/art-director">
            <NavigatingButton />
          </Link>
        </div>
      </div>

      <div className="container__right side">
        <div className="container__right__ball side__ball"></div>
        <div className="blured">
          <h1 className="videographer">Videography</h1>
          <p>Editing Producing Directing</p>
          <Link to="/videography">
            <NavigatingButton />
          </Link>
        </div>
      </div>
      <div className="ilia" onClick={() => history.push("/about")}>
        <img src={iliaSVG} alt="ilia" />
      </div>
    </div>
  );
};

export default Home;
