import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GlobalAppContext } from "./Context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalAppContext>
    <App></App>
  </GlobalAppContext>
);
