import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";

class Videos extends React.Component {
  render() {
    return (
      <div>
        <div class="card" style={{ width: "35rem" }}>
          <ReactPlayer url="https://youtu.be/X0sJobShiX4" controls />
          <div class="card-body">
            <h5 class="card-title">Video 1</h5>
            <p class="card-text">
              Observa el siguiente video donde encontraras información para
              realizar el examen
              <br />
              <button type="button" class="btn btn-outline-warning">
                {" "}
                <Link to="/Quiz" className="btn btn-light">
                  Realizar Quiz
                </Link>
              </button>
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "40rem" }}>
          <ReactPlayer url="https://youtu.be/X0sJobShiX4" controls />
          <div class="card-body">
            <h5 class="card-title">Video 2</h5>
            <p class="card-text">
              Observa el siguiente video donde encontraras información para
              realizar el examen
              <br />
              <button type="button" class="btn btn-outline-warning">
                {" "}
                <Link to="/Quiz" className="btn btn-light">
                  Realizar Quiz
                </Link>
              </button>
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "40rem" }}>
          <ReactPlayer url="https://youtu.be/X0sJobShiX4" controls />
          <div class="card-body">
            <h5 class="card-title">Video 3</h5>
            <p class="card-text">
              Observa el siguiente video donde encontraras información para
              realizar el examen
              <br />
              <button type="button" class="btn btn-outline-warning">
                {" "}
                <Link to="/Quiz" className="btn btn-light">
                  Realizar Quiz
                </Link>
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
