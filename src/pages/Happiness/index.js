import "./index.scss"
import "../ArtDirector/index.scss"
import arrowRightWhiteSVG from "../../assets/icons/arrow-right-whtie.svg";
import happiness from "../../assets/images/happiness.svg"
import happiness1 from "../../assets/images/happiness1.svg"
import happiness2 from "../../assets/images/happiness2.svg"
import happiness3 from "../../assets/images/happiness3.svg"

const Happiness = () => {
  return (
    <div className="happiness">
       <span className="scroll">
            <button className="scroll__arrow" style={{ cursor: "pointer" }}>
              <img src={arrowRightWhiteSVG} style={{width: "28px"}} className="arrow-cl" alt="arrow" />
            </button>
        </span>
        <div className="vid">
        <img src={happiness}></img>
        </div>
        <h3>
        The Path to Happiness
        </h3>
        <div className="role">
            <p className="roleP">Date: 03/08/2020</p>
            <p className="roleP">Role: Director</p>
            <p className="roleP">Credit: Lado Mchedlishvili - DOP, Nika Pruidze - Producer</p>
        </div>
        <div className="cont">
            <img alt="girl" src ={happiness1} style={{margin: "0 6em"}}></img>    
            <div className="desc"><p>
                The path to happiness is a documentary Film. It depicts lifes of IDP-s From Abkhazia. The movie mainly shows there activities in a adult learning centers, where they  develop new skills.</p></div>
        </div>    
        <div className="cont" style={{flexDirection: "row-reverse"}}>
            <img alt="girl" src ={happiness2} style={{margin: "0 6em"}}></img>    
            <div className="desc"><p>
This Film was funded By DVV International. This is an ongoing project, wich needed a promo video. Our team did just that.
</p></div>
        </div>    
        <div className="cont">
            <img alt="girl" src ={happiness3} style={{margin: "0 6em"}}></img>    
            <div className="desc"><p>
              
It took 1 director, 1 DOP. 2 cameraman, 
1 producer, 1 driver and 10 Weeks to finish this Film. it was an unforgettable journey across Georgia. 
</p></div>
        </div>    
    </div>
  );
};

export default Happiness;
