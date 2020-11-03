import React from "react";
import { Link } from "react-router-dom";
import "../styles/cuenta.css";

class Cuenta extends React.Component {
  render() {
    return (
      <div>
        <div class="card">
          <nav>
            <ul>
              <li>
                {" "}
                <Link to="/home">Estudiantes</Link>
                <ul class="children">
                  <li>
                    {" "}
                    <Link to="/quiz">Maestros</Link>
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

export default Cuenta;
