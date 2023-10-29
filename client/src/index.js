import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createRoot } from "react-dom";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
