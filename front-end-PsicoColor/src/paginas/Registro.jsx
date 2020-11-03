import React from "react";
import InsigniaRegistro from "../components/InsigniaRegistro";
import { Link } from "react-router-dom";

class Registro extends React.Component {
  state = {
    form: {
      user: "",
      pass: "",
      confpass: "",
      grupo: "",
      docente: "",
      estudiante: ""
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
              <h1 className="tituloingresar">Registrarse</h1>
              <InsigniaRegistro
                onChange={this.handleChange}
                formValues={this.state.form}
              />
              <Link to="/iniciarsesion" className="regis2 btn">
                Inicia sesión
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registro;
