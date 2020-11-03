import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
// import Home from "../pages/Home";
import Iniciosesion from "../paginas/InicioSesion";
import Registro from "../paginas/Registro";
import Inicio from "../paginas/Inicio";
import Cuenta from "../paginas/Cuenta";
import Quiz from "../paginas/Quiz";

function Rutas() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Inicio} />
          <Route exact path="/iniciarsesion" component={Iniciosesion} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/cuenta" component={Cuenta} />
          <Route exact path="/quiz" component={Quiz} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Rutas;
