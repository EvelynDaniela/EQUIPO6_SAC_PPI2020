import React from "react";
import { Link } from "react-router-dom";
import "../styles/cuenta.css";
import "bootstrap/dist/css/bootstrap.css";

class GradoOctavo extends React.Component {
  render() {
    return (
      <div>
        <div class="card">
          <nav>
            <ul class="list-group">
              <li class="list-group-item">Lista Estudiantes Octavo</li>

              <li class="list-group-item list-group-item-primary">
                ATEHORTUA ATEHORTUA ANDREA
              </li>
              <li class="list-group-item list-group-item-secondary">
                ARCILA DUQUE MELISA
              </li>
              <li class="list-group-item list-group-item-success">
                BURITICA MARIN SOFIA
              </li>
              <li class="list-group-item list-group-item-danger">
                GARCIA TOVAR KARLA
              </li>
              <li class="list-group-item list-group-item-warning">
                GONZALEZ MIGUEL ANGEL
              </li>
              <li class="list-group-item list-group-item-info">
                LOPEZ CARVAJAL MANUELA
              </li>
              <li class="list-group-item list-group-item-light">
                PALACIO NICOLAS
              </li>
              <li class="list-group-item list-group-item-dark">
                OSORIO GUZMAN MARIANA
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default GradoOctavo;
