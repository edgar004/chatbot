import React from "react";
import { Navbar } from "../components/ui/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import { ChatbotScreen } from "../components/chatbot/ChatbotScreen";

export const DasboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/chatbot" component={ChatbotScreen} />
          {/* <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroeId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} /> */}
          <Redirect to="/chatbot" />
        </Switch>
      </div>
    </>
  );
};
