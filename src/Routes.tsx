import React from "react";
import { Route, Switch } from "react-router-dom";

import NotFound from "./containers/NotFound/NotFound";
import Home from "./containers/Home/Home";
import Rovers from "./containers/Rovers/Rovers";
import OneRover from "./containers/Rovers/Components/OneRover";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/rovers">
        <Rovers />
      </Route>
      <Route exact path="/rovers/:id">
        <OneRover />
      </Route>

      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
