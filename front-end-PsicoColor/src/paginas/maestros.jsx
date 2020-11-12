import React from "react";
import { Link } from "react-router-dom";
import "../styles/maestros.css";

class maestros extends React.Component {
  render() {
    return (
      <div>
        <div class="card">
          <nav>
            <ul>
              <li>
                {" "}
                <Link to="/maetros">Grados</Link>
                <ul class="children">
                  <li>
                    {" "}
                    <Link to="/octavo">Octavo</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/noveno">Noveno</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/cuenta">volver</Link>
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

export default maestros;
