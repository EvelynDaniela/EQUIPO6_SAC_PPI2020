import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import header from "../imagenes/Slider1.jpg";

class Inicio extends React.Component {
  render() {
    return (
      <div>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container"></div>
          </div>
        </div>
        <h1 className="maintitle">Psico-Color</h1>

        <div class="card-deck">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Mira el siguiente video para que conozcas un poco de la
                Psicología del color
              </h5>
              <p class="card-text">
                <ReactPlayer url="https://youtu.be/X0sJobShiX4" controls />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;
