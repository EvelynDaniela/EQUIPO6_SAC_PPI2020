import React from "react";
import { Link } from "react-router-dom";
import "../styles/cuenta.css";

class CuentaEstudiante extends React.Component {
  render() {
    return (
      <div>
        <div class="card">
          <nav>
            <ul>
              <li>
                {" "}
                <Link to="/cuentaEstudiante">Estudiantes</Link>
                <ul class="children">
                  <li>
                    {" "}
                    <Link to="/quiz">Evaluación</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/home">Videos</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/home">Cerar Sesion</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default CuentaEstudiante;
