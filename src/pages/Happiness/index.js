import "./index.scss";
import "../ArtDirector/index.scss";
import BackButton from "../../components/BackButton";
import happiness from "../../assets/images/happiness.svg";
import happiness1 from "../../assets/images/happiness1.svg";
import happiness2 from "../../assets/images/happiness2.svg";
import happiness3 from "../../assets/images/happiness3.svg";
import ReactPlayer from 'react-player'

const Happiness = () => {
  return (
    <div className="happiness-container">
      <div className="happiness">
        <BackButton />
        <div className="vid">
          <ReactPlayer url='https://www.youtu.be/uF5BkAaw_LY' width={1280} height={720} />
        </div>
        <h3>The Path to Happiness</h3>
        <div className="role">
          <p className="roleP">Date: 03/08/2020</p>
          <p className="roleP">Role: Director</p>
          <p className="roleP">
            Credit: Lado Mchedlishvili - DOP, Nika Pruidze - Producer
          </p>
        </div>
        <div className="cont">
          <img alt="girl" src={happiness1} style={{ margin: "0 6em" }}></img>
          <div className="desc">
            <p>
              The Path to Happiness is a documentary film. It depicts the lives of IDPs from Abkhazia. The movie mainly shows their activities in adult learning centers, where they develop new skills.
            </p>
          </div>
        </div>
        <div className="cont" style={{ flexDirection: "row-reverse" }}>
          <img alt="girl" src={happiness2} style={{ margin: "0 6em" }}></img>
          <div className="desc">
            <p>
              This film was funded by DVV International. This is an ongoing project that needed a promo video.
            </p>
          </div>
        </div>
        <div className="cont">
          <img alt="girl" src={happiness3} style={{ margin: "0 6em" }}></img>
          <div className="desc">
            <p>
              It took 1 director, 1 DOP, 2 cameramen,
              1 producer, 1 driver, and 10 weeks to finish this film. It was an unforgettable journey across Georgia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Happiness;
