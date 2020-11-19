import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/cuenta.css";

class Grupos extends React.Component {
  render() {
    return (
      <div>
        <h2>Seleccione el grupo a revisar </h2>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Octavo</h5>

                <Link to="/gradoOctavo" class="btn btn-primary">
                  Ver grupo
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Noveno</h5>

                <Link to="/gradoNoveno" class="btn btn-primary">
                  ver grupo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Grupos;
