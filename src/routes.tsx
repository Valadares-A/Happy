import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Switch } from "react-router-dom";
import { BrowserRouter, Route  } from "react-router-dom";
import Landing from "./pages/Landing";
import OrphanageMap from "./pages/OrphanageMap";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact  component={Landing} />
      <Route path="/app" component={OrphanageMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
