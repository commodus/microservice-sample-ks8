import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Dashboard from "../dashboard/dashboard";
import Login from "../login/login";
import PrivateRoute from "../components/private-route";
import React from "react";

const App = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/">
        <Dashboard />
      </PrivateRoute>
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default App;
