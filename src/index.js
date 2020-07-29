import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./routes/Home.css";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
