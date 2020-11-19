import React from "react";
import { Link } from "react-router-dom";
import "../styles/cuenta.css";
import "bootstrap/dist/css/bootstrap.css";

class GradoNoveno extends React.Component {
  render() {
    return (
      <div>
        <div class="card">
          <nav>
            <ul class="list-group">
              <li class="list-group-item">Lista Estudiantes Noveno</li>

              <li class="list-group-item list-group-item-primary">
                {" "}
                AGUDELO RESTREPO NICOL
              </li>
              <li class="list-group-item list-group-item-secondary">
                BERRIO BERRIO LIZ
              </li>
              <li class="list-group-item list-group-item-success">
                CASTRO MARIA FERNANDA
              </li>
              <li class="list-group-item list-group-item-danger">
                FERNANDEZ PEREZ JENIFER
              </li>
              <li class="list-group-item list-group-item-warning">
                GONZALES ANDRES MAURICIO
              </li>
              <li class="list-group-item list-group-item-info">
                LOPEZ GUZMAN JULIAN
              </li>
              <li class="list-group-item list-group-item-light">
                MESA RAMIREZ NATALIA
              </li>
              <li class="list-group-item list-group-item-dark">
                RESTREPO MARIN ESTEBAN
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default GradoNoveno;
