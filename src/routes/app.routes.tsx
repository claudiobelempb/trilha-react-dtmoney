import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Signin } from "../pages/Signin";
import { Dashboard } from "../pages/DashBoard";
import { List } from "../pages/List"
import { Home }from "../pages/Home";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/singin" exact component={Signin}/>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/list/:type" exact component={List} />
      </Switch>
    </BrowserRouter>
  )
}

export { AppRoutes };