import React from "react";
import ReactDOM from "react-dom/client";
import "bulma/css/bulma.min.css";
import "./index.css";
import App from "./App";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <div className="container root">
    <App />
  </div>
);
