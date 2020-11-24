import React from "react";
import { Link } from "react-router-dom";
import "../styles/cuenta.css";
import "bootstrap/dist/css/bootstrap.css";

class GradoOctavo extends React.Component {
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
              <li class="list-group-item">Lista Estudiantes Octavo</li>

              <li class="list-group-item list-group-item-primary">
                ATEHORTUA ATEHORTUA ANDREA
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
              <li class="list-group-item list-group-item-secondary">
                ARCILA DUQUE MELISA
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    25%
                  </div>
                </div>
              </li>
              <li class="list-group-item list-group-item-success">
                BURITICA MARIN SOFIA
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
              <li class="list-group-item list-group-item-danger">
                GARCIA TOVAR KARLA
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
              <li class="list-group-item list-group-item-warning">
                GONZALEZ MIGUEL ANGEL
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    70%
                  </div>
                </div>
              </li>
              <li class="list-group-item list-group-item-info">
                LOPEZ CARVAJAL MANUELA
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
              <li class="list-group-item list-group-item-light">
                PALACIO NICOLAS
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "45%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    45%
                  </div>
                </div>
              </li>
              <li class="list-group-item list-group-item-dark">
                OSORIO GUZMAN MARIANA
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

export default GradoOctavo;
