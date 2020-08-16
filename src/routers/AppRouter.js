import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DasboardRoutes } from "./DasboardRoutes";
// Sistema de rutas principal
export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route path="/chatbot" component={DasboardRoutes} />
          {/* Sistema de rutas hijas */}
        </Switch>
      </div>
    </Router>
  );
};
