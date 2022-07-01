import "../Happiness/index.scss"
import "../ArtDirector/index.scss"
import arrowRightWhiteSVG from "../../assets/icons/arrow-right-whtie.svg";
import ephemerels from "../../assets/images/ephemerels-main.svg"
import ephemerels1 from "../../assets/images/ephemerels1.svg"
import ephemerels2 from "../../assets/images/ephemerels2.svg"
import ephemerels3 from "../../assets/images/ephemerels3.svg"

const Ephemerels = () => {
  return (
    <div className="happiness">
       <span className="scroll">
            <button className="scroll__arrow" style={{ cursor: "pointer" }}>
              <img src={arrowRightWhiteSVG} style={{width: "28px"}} className="arrow-cl" alt="arrow" />
            </button>
        </span>
        <div className="vid" style={{width: "30em", transform: "scale(1.3)", margin: "12em"}}>
        <img src={ephemerels} ></img>
        </div>
        <h3>
        Ephemerels
        </h3>
        <div className="role">
            <p className="roleP">Date: 14/11/2022</p>
            <p className="roleP">Role: DOP</p>
            <p className="roleP">Credit: Misho Merabishvili - DIrector</p>
        </div>
        <div className="cont">
            <img alt="girl" src ={ephemerels1} style={{margin: "0 6em"}}></img>    
            <div className="desc"><p>
            The path to happiness is a documentary Film. It depicts lifes of IDP-s From Abkhazia. The movie mainly shows there activities in a adult learning centers , where they  develop new skills.</p></div>
        </div>    
        <div className="cont" style={{flexDirection: "row-reverse"}}>
            <img alt="girl" src ={ephemerels2} style={{margin: "0 6em"}}></img>    
            <div className="desc"><p>
            This Film was funded By DVV International. This is an ongoing project, wich needed a promo video. Our team did just that.

</p></div>
        </div>    
        <div className="cont">
            <img alt="girl" src ={ephemerels3} style={{margin: "0 6em"}}></img>    
            <div className="desc"><p>
            It took 1 director, 1 DOP. 2 cameraman, 
1 producer, 1 driver and 10 Weeks to finish this Film. it was an unforgettable journey across Georgia. 

</p></div>
        </div>    
    </div>
  );
};

export default Ephemerels;
