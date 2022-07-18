import BackButton from "../../components/BackButton";
import foxy from "../../assets/images/foxy/foxy.png";
import putinylea from "../../assets/images/foxy/putinylea.jpg";
import visitcard from "../../assets/images/foxy/visitcard.jpg";
import wallposter from "../../assets/images/foxy/wallposter.png";

import "./index.scss";

const Foxy = () => {
  return (
    <div className="foxy">
      <BackButton />
      <div className="foxy__logo">
        <img src={foxy} alt="foxy logo" />
      </div>
      <div className="foxy__content">
        <h1>Foxy Browser Branding</h1>
        <span>
          <p>
            Date: 13/05/2020
            <br />
            Role: Art Director
            <br />
            Credit: Akaki Razmadze
          </p>
          <div className="foxy__content__poster">
            <img src={putinylea} alt="poster" />
            <p>
              This is a concept brand for a secure browser. This idea was created.
              When war broke out between Russia and Ukraine, For everyone, it is very important to have privacy. This brand is intelligent and respects the lack of disturbance.
            </p>
          </div>
        </span>
      </div>
      <div className="foxy__wallposter">
        <img src={visitcard} alt="visit card" width={1048} height={589} />
        <p>Buissness Card Mock up</p>
      </div>
      <div className="foxy__wallposter">
        <img src={wallposter} alt="visit card" />
        <p>Poster Mock Up</p>
      </div>
    </div>
  );
};

export default Foxy;
