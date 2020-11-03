import React from "react";
import "../styles/navbar.css";
import logonavbar from "../imagenes/Slider1.jpg";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <Link to="/home" className="logo-navbar">
          <img
            className="img-fluid"
            src={logonavbar}
            alt="logonavbar"
            height="50px"
            width="50px"
          />{" "}
          Psico-Color
        </Link>
        <form class="form-inline">
          <Link to="/home" className="btn btn-light">
            Menú principal
          </Link>
          <Link to="/iniciarsesion" className="btn btn-light">
            Iniciar sesión
          </Link>
          <Link to="/registro" className="btn btn-light">
            Registrarse
          </Link>
        </form>
      </nav>
    );
  }
}

export default Navbar;
