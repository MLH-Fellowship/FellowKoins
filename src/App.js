import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import FellowBoard from "./Components/FellowBoard/FellowBoard";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/fellowboard" component={FellowBoard} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
