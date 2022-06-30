import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about">
          <h1>about</h1>
        </Route>
        <Route path="/dashboard">
          <h1>dashboard</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
