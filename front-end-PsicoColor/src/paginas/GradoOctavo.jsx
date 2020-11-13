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
                <Link to="/home">Grupos</Link>
                <ul class="children">
                  <li>
                    {" "}
                    <Link to="/quiz">Octavo</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/home">Noveno</Link>
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

export default Cuenta;