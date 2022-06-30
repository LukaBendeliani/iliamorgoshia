import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArtDirector from "./pages/ArtDirector";
import Home from "./pages/Home";
import Videography from "./pages/Videographer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/art-director" component={ArtDirector} />
        <Route exact path="/videography" component={Videography} />
      </Switch>
    </Router>
  );
};

export default App;
