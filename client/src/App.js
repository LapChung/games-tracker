import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import R6Search from "./components/r6/R6Search";
import R6Profile from "./components/r6/R6Profile";
import MainPage from "./components/MainPage";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/search" component={R6Search} />
        <Route
          exact
          path="/profile/:platform/:platformUserIdentifier"
          component={R6Profile}
        />
      </Router>
    );
  }
}

export default App;
