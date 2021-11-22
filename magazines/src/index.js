import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import React from "react";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";

import { store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  globalThis.document.getElementById("root")
);

reportWebVitals();
