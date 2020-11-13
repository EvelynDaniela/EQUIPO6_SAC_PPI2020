import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
// import Home from "../pages/Home";
import Iniciosesion from "../paginas/InicioSesion";
import Registro from "../paginas/Registro";
import Inicio from "../paginas/Inicio";
import InicioEstudiante from "../paginas/InicioEstudiante";
import Cuenta from "../paginas/Cuenta";
import Quiz from "../paginas/Quiz";
import CuentaEstudiante from "../paginas/CuentaEstudiante";
import Grupos from "../paginas/Grupos";
import GradoOctavo from "../paginas/GradoOctavo";
import GradoNoveno from "../paginas/GradoNoveno";
function Rutas() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Inicio} />
          <Route exact path="/iniciarsesion" component={Iniciosesion} />
          <Route exact path="/InicioEstudiante" component={InicioEstudiante} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/cuenta" component={Cuenta} />
          <Route exact path="/cuentaEstudiante" component={CuentaEstudiante} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/grupos" component={Grupos} />
          <Route exact path="/gradoOctavo" component={GradoOctavo} />
          <Route exact path="/gradoNoveno" component={GradoNoveno} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Rutas;
