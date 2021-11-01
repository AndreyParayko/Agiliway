import React from "react";
import { Jumbotron } from "reactstrap";
import "./styles.scss";
const HomePage = () => {
  return (
    <div className="home-container">
      <Jumbotron>
        <h1 className="display-3 text-center">Hello, world!</h1>
        <p className="lead text-center">Welcome to my app!</p>
        <p className="text-center">Work in progress!</p>
      </Jumbotron>
    </div>
  );
};

export default HomePage;
