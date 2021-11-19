import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Magazines from "./pages/Magazines";
import Statistic from "./pages/Statistic";
import MagazineDetails from "./pages/MagazineDetails";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/magazines" component={Magazines} exact />
        <Route path="/statistic" component={Statistic} exact />
        <Route path="/details/:id" component={MagazineDetails} exact />
      </Switch>
    </Router>
  );
}

export default App;
