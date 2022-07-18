import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import arrow from "../../assets/icons/arrow-white.svg";
import "./index.scss";

const artdirectorPaths = ["/art-director", "/foxy", "/book-cover", "/indeed"];
const videographerPaths = ["/videography", "/happiness", "/ephemerels"];

const SwitchButton = () => {
    const [onArtDirector, setOnArtDirector] = useState(false);
    const [onVideographer, setOnVideographer] = useState(false);

    const history = useHistory();

    useEffect(() => {
        if (artdirectorPaths.includes(history?.location?.pathname)) {
            setOnArtDirector(true);
        } else {
            setOnArtDirector(false)
        }

        if (videographerPaths.includes(history?.location?.pathname)) {
            setOnVideographer(true)
        } else {
            setOnVideographer(false)
        }
    }, [history])

    const getClassName = () => {
       
        if (onArtDirector) {
            return "switch-button-right"
        }

        if (onVideographer) {
            return "switch-button-left"
        }
    }

    const handleNavigate = () => {
        if (onArtDirector) {
            history.push("/videography")
        }

        if (onVideographer) {
            history.push("/art-director")
        }
    }

    return (
        <div className={getClassName()} hidden={!onArtDirector && !onVideographer} onClick={handleNavigate}>
            <img src={arrow} alt="white arrow" />
        </div>
    )
}

export default SwitchButton