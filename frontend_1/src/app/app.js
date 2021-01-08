import "./app.scss";

import { Route, Switch } from "react-router-dom";

import React from "react";
import Registration from "../registration/registration";

const App = (props) => {
  return (
    <div className="app-main">
      <Switch>
        <Route exact path="/">
          <Registration />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
