import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import Rutas from "./components/Rutas";
import "./styles.css";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Rutas />
  </React.StrictMode>,
  rootElement
);
