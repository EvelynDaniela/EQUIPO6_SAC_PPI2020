import React from "react";
import { Link } from "react-router-dom";

class InsigniaFormulario extends React.Component {
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
              onChange={this.props.onCh4redfccange}
              className="form-control"
              type="email"
              name="correo"
              value={this.props.formValues.user}
            />
          </div>

          <div className="form-group">
            <label>Contraseña:</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="password"
              name="pass"
              value={this.props.formValues.pass}
            />
          </div>

          <Link to="/cuenta" className="btn btn-light">
            Entrar
          </Link>
        </form>
      </div>
    );
  }
}
export default InsigniaFormulario;
