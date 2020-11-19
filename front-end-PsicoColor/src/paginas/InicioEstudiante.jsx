import React from "react";
// import "../components/styles/Iniciosesion.css";
import { Link } from "react-router-dom";
import InsigniaEstudiante from "../components/InsigniaEstudiante";

class InicioEstudiante extends React.Component {
  state = {
    form: {
      user: "",
      pass: "",
      grupo: ""
    }
  };

  handleChange = (e) => {
    const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value;
    this.setState({
      form: nextForm
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className="tituloingresar">Iniciar sesión</h1>
              <InsigniaEstudiante
                onChange={this.handleChange}
                formValues={this.state.form}
              />
              <Link to="/registro" className="regis2 btn">
                Crear Cuenta
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InicioEstudiante;
