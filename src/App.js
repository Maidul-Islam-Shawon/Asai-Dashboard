import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./common/Navigation";
import BasicSidebar from "./Components/Sidebar/BasicSidebar";
import Dashboard from "./Components/Sidebar/Dashboard";
import DashboardAnt from "./Components/Sidebar/DashboardAnt";
import Home from "./Pages/Home";


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/basic" component={BasicSidebar} />
        <Route exact path="/nav-2" component={Dashboard} />
        <Route exact path="/nav-3" component={DashboardAnt} />
      </Switch>
    </Router>
  );
}

export default App;
