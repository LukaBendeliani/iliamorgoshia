import BackButton from "../../components/BackButton";
import eclipseVodka from "../../assets/images/vodka/eclipse-vodka.jpg";
import mangoFlavoredVodka from "../../assets/images/vodka/mango-flavored-vodka.jpg";
import vodkaBottle from "../../assets/images/vodka/vodka-bottle.png";

import "./index.scss";

const Vodka = () => {
  return (
    <div className="vodka">
      <BackButton />

      <div className="vodka__image">
        <img
          src={eclipseVodka}
          alt="eclipse vodka bottle"
          width={1112}
          height={638}
        />
      </div>
      <div className="vodka__content">
        <h1>Mango flavored Vodka</h1>
        <span>
          <p>
            Date: 03/04/2020
            <br /> Role: Art Director
            <br /> Credit: Nick kumbari
          </p>
          <img
            src={mangoFlavoredVodka}
            alt="mango flavored vodka"
            width={720}
            height={405}
          />
        </span>
      </div>
      <div className="vodka__bottom-content">
        <div className="vodka__bottom-content__img-wrapper">
          <img src={vodkaBottle} alt="vodka bottle" />
        </div>

        <p>
          This vodka design was created as a concept.

          pakiging for vodka. New drinks are becoming

          more and more innovative and modern. Therefore

          Packiging should fit the new identity of a drink.
        </p>
      </div>
    </div>
  );
};

export default Vodka;
