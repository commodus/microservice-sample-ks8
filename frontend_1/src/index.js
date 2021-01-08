import "./style.scss";

import { applyMiddleware, createStore } from "redux";

import App from "./app/app";
import { Provider } from "react-redux";
import React from "react";
import ReactDom from "react-dom";
import ReduxThunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import { registerReducer } from "./reducers/register-reducer";

const store = createStore(registerReducer, applyMiddleware(ReduxThunk));

ReactDom.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
