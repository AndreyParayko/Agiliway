import "./App.scss";
import React from "react";
import TestForm from "./components/TestForm";
import Todo from "./components/Todo/Todo";
import FinalForm from "./components/FinalForm/FinalForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/FinalForm" component={FinalForm} exact />
          <Route path="/Todo/" component={Todo} exact />
          <Route path="/TestForm/" component={TestForm} exact />
        </Switch>
      </Router>
    );
  }
}

export default App;
