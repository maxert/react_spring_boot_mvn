import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Registration from "./Components/registation";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />
      </Router>
    );
  }
}

export default App;
