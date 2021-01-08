import { applyMiddleware, createStore } from "redux";

import App from "./app/app";
import { Provider } from "react-redux";
import React from "react";
import ReactDom from "react-dom";
import ReduxThunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import { accountReducer } from "./login/account-reducer";

const store = createStore(accountReducer, applyMiddleware(ReduxThunk));

ReactDom.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
