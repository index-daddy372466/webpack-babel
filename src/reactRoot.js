import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
// alternate methate with only { createRoot }
// const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
