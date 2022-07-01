import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import ArtDirector from "./pages/ArtDirector";
import BookCover from "./pages/BookCover";
import Foxy from "./pages/Foxy";
import Home from "./pages/Home";
import Indeed from "./pages/Indeed";
import Vodka from "./pages/Vodka";
import Videography from "./pages/Videographer";
import Happiness from "./pages/Happiness";
import Ephemerels from "./pages/Ephemerels";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/art-director" component={ArtDirector} />
        <Route exact path="/vodka" component={Vodka} />
        <Route exact path="/foxy" component={Foxy} />
        <Route exact path="/book-cover" component={BookCover} />
        <Route exact path="/indeed" component={Indeed} />
        <Route exact path="/about" component={About} />
        <Route exact path="/happiness" component={Happiness} />
        <Route exact path="/ephemerels" component={Ephemerels} />
        <Route exact path="/videography" component={Videography} />
      </Switch>
    </Router>
  );
};

export default App;
