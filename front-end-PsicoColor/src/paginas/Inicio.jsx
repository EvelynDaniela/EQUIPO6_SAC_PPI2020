import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import logonavbar from "../imagenes/Slider1.jpg";

class Inicio extends React.Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Que es Psico-Color</h5>
                <p class="card-text">
                  Es un servicio para estudiantes de la Institución Educativa
                  Santos Ángeles Custodios de los grados octavo y noveno, que
                  tienen falencias al manejar los colores en sus proyactos. Se
                  llama Psico_Color, y es una aplicación que pueede ayudar a el
                  manejo de este. Está inspirada en algunas apps como yeeply,
                  que ayuda a diseñadores de apps durante su proceso de creación
                  , con la importancia de los colores; Adobe Kuler, que crea
                  paletas de colores con el círculo cromático o la imagen.
                  Examina miles de combinaciones de colores; Por último, Desing
                  color theory, que contiene libros con paletas de colores y el
                  significado de cada uno. Con esto nuestra aplicación cuenta
                  con tres niveles evaluativos, para que el aprendizaje sea más
                  completo y el usuario tenga un buen desarrollo del tema.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Desarrollador por</h5>
                <p class="card-text">
                  Realizado por Evelyn Daniela Sanchez && Juliana Restrepo
                </p>
                <img
                  class="d-block w-100"
                  src={logonavbar}
                  alt="Third slide"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;
