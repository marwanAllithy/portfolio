import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider } from "@mantine/core";

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider >
      <App />
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
