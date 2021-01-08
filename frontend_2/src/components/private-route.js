import * as utils from "../utils";

import { Redirect, Route } from "react-router-dom";

import React from "react";
import { connect } from "react-redux";

const PrivateRoute = (props) => {
  const { children, ...rest } = props;

  let account = utils.getAccountFromLocal();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        account && account._id ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    account: state.account,
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);
