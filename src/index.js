import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
