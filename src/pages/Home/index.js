import NavigatingButton from "../../components/NavigatingButton";
import "./index.scss";

const Home = () => {
  return (
    <div className="container">
      <div className="container__left side">
        <div className="container__left__ball side__ball"></div>
        <div className="blured">
          <h1 className="art-director">Art Director</h1>
          <span className="row">
            <p>
              UI/UX
              <br /> Design <br />
              Concepting
            </p>
            <NavigatingButton />
          </span>
        </div>
      </div>

      <div className="container__right side">
        <div className="container__right__ball side__ball"></div>
        <div className="blured">
          <h1 className="videographer">Videographer</h1>
          <span className="row">
            <p>
              Editing
              <br /> Producing <br />
              Directing
            </p>
            <NavigatingButton />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
