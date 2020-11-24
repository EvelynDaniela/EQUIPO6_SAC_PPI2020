import React from "react";
import { Link } from "react-router-dom";
import "../styles/cuenta.css";
import "bootstrap/dist/css/bootstrap.css";

class GradoNoveno extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { width } = this.props;
    return (
      <div>
        <div class="card">
          <nav>
            <ul class="list-group">
              <li class="list-group-item">Lista Estudiantes Noveno</li>

              <li class="list-group-item list-group-item-primary">
                {" "}
                AGUDELO RESTREPO NICOL
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "10%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    10%
                  </div>
                </div>
              </li>
              <li class="list-group-item list-group-item-secondary">
                BERRIO BERRIO LIZ
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "0" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </li>
              <li class="list-group-item list-group-item-success">
                CASTRO MARIA FERNANDA
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "20%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    20%
                  </div>
                </div>
              </li>
              <li class="list-group-item list-group-item-danger">
                FERNANDEZ PEREZ JENIFER
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    50%
                  </div>
                </div>
              </li>
              <li class="list-group-item list-group-item-warning">
                GONZALES ANDRES MAURICIO
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    60%
                  </div>
                </div>
              </li>
              <li class="list-group-item list-group-item-info">
                LOPEZ GUZMAN JULIAN
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    30%
                  </div>
                </div>
              </li>
              <li class="list-group-item list-group-item-light">
                MESA RAMIREZ NATALIA
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    90%
                  </div>
                </div>
              </li>
              <li class="list-group-item list-group-item-dark">
                RESTREPO MARIN ESTEBAN
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "10%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    10%
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <Link to="/grupos" class="btn btn-primary">
            Regresar
          </Link>
        </div>
      </div>
    );
  }
}

export default GradoNoveno;
