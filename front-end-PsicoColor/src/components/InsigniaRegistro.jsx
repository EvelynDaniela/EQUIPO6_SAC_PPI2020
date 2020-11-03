import React from "react";
import { Link } from "react-router-dom";

class InsigniaRegistro extends React.Component {
  //EVENTO BOTÓN
  handleClick = (e) => {
    console.log("Botón presionado");
  };

  //EVENTO FORMULARIO

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Correo:</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="correo"
              value={this.props.formValues.user}
            />
          </div>

          <div className="form-group">
            <label>Contraseña:</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="pass"
              value={this.props.formValues.pass}
            />
          </div>
          <div className="form-group">
            <label>Confirmar Contraseña:</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="password"
              name="confpass"
              value={this.props.formValues.confpass}
            />
          </div>

          <div className="form-group">
            <label>Perfil: </label>
            <select name="perfil" className="form-control">
              <option>Seleccionar una opción</option>
              <option value={this.props.formValues.docente}>Docente</option>
              <option value={this.props.formValues.estudiante}>
                Estudiante
              </option>
            </select>
          </div>
          <div className="form-group">
            <label>Grado: </label>
            <select name="perfil" className="form-control">
              <option>Seleccionar una opción</option>
              <option>Octavo</option>
              <option>Noveno</option>
            </select>
          </div>

          <Link to="/cuenta" className="btn btn-light">
            Registrarse
          </Link>
        </form>
      </div>
    );
  }
}
export default InsigniaRegistro;
