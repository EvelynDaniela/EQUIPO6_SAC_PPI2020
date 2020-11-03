import React from "react";
import "../styles/quiz.css";
import { Preguntas } from "./Preguntas";
import { Link } from "react-router-dom";

class Quiz extends React.Component {
  state = {
    currentQuestion: 0,
    myRespuesta: null,
    opciones: [],
    puntaje: 0,
    disabled: true,
    isEnd: false
  };

  mostrarQuiz = () => {
    this.setState(() => {
      return {
        pregunta: Preguntas[this.state.currentQuestion].pregunta,
        respuesta: Preguntas[this.state.currentQuestion].respuesta,
        opciones: Preguntas[this.state.currentQuestion].opciones
      };
    });
  };

  componentDidMount() {
    this.mostrarQuiz();
  }

  nextQuestionHandler = () => {
    const { myRespuesta, respuesta, puntaje } = this.state;

    if (myRespuesta === respuesta) {
      this.setState({
        puntaje: puntaje + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          pregunta: Preguntas[this.state.currentQuestion].pregunta,
          opciones: Preguntas[this.state.currentQuestion].opciones,
          respuesta: Preguntas[this.state.currentQuestion].respuesta
        };
      });
    }
  }

  checkAnswer = (respuesta) => {
    this.setState({ myRespuesta: respuesta, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === Preguntas.length - 1) {
      this.setState({
        isEnd: true
      });
    }
    if (this.state.myRespuesta === this.state.respuesta) {
      this.setState({
        puntaje: this.state.puntaje + 1
      });
    }
  };
  render() {
    const { opciones, myRespuesta, currentQuestion, isEnd } = this.state;

    if (isEnd) {
      return (
        <div className="result">
          <h3>Tu puntaje final es {this.state.puntaje} puntos </h3>
          <ul>
            <li>
              {" "}
              <Link to="/cuenta">Ir al menú</Link>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>{this.state.pregunta} </h1>
          <span>{`Preguntas ${currentQuestion}  de ${
            Preguntas.length - 1
          } Restastes `}</span>
          {opciones.map((option) => (
            <p
              key={option.id}
              className={`ui floating message options
               ${myRespuesta === option ? "selected" : null}
               `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
          {currentQuestion < Preguntas.length - 1 && (
            <button
              className="ui inverted button"
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Siguiente
            </button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === Preguntas.length - 1 && (
            <button className="ui inverted button" onClick={this.finishHandler}>
              Enviar respuesta
            </button>
          )}
        </div>
      );
    }
  }
}

export default Quiz;
