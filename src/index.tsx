import React from "react";
import ReactDOM from "react-dom";
import App from "./react/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import * as serviceWorker from "./serviceWorker";

import "rsuite/dist/styles/rsuite-default.css";
import "./scss/main.scss";

import { Firestore } from "./firebase/firestore";
import { BrowserRouter } from "react-router-dom";

//  ─────────────────────────────────────────────────────────────── DOM ───┐
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
// <───────────────────────────────────────────────────────────────────────┘

//  ──────────────────────────────────────────────────────────── SERVER ───┐
Firestore.startAuthentication();
Firestore.startServer();
// <───────────────────────────────────────────────────────────────────────┘

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
