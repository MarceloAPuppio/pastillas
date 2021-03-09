import React from "react";
import ModalInput from "../modal-inputs/index";
import "./index.css";
class Modal extends React.Component {
  state = {
    fecha: new Date(),
    fechaAdaptada: "",
    medicionPresion: "",
    medicionGleucemia: "",
    medicamentosArray: [...this.props.datos.medicamentosArray],
  };
  handleChange = (e) => {
    if (e.target.type === "checkbox") {
      let medicamentosArray = [...this.state.medicamentosArray];
      medicamentosArray[e.target.getAttribute("data-key")].ingerido =
        e.target.checked;
      this.setState({ ...this.state, medicamentosArray: medicamentosArray });
    } else {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value,
      });
    }
  };
  componentWillMount = () => {
    this.setState({
      fechaAdaptada: `${this.state.fecha
        .getDate()
        .toString()
        .padStart(2, "0")}-${(this.state.fecha.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${this.state.fecha.getFullYear().toString()}`,
    });
  };
  render() {
    return (
      <React.Fragment>
        <section className="modal">
          <form
            className="modal__form"
            action="#"
            onSubmit={(e) => {
              this.props.onSubmitModal(e, this.state);
            }}
          >
            <h1>Control diario: {this.state.fechaAdaptada}</h1>
            {this.props.datos.gleucemia && (
              <ModalInput
                type="text"
                name="medicionGleucemia"
                placeholder="Gleucemia"
                onChange={this.handleChange}
              />
            )}
            {this.props.datos.presion && (
              <ModalInput
                type="text"
                placeholder="Presión"
                name="medicionPresion"
                onChange={this.handleChange}
              />
            )}
            {this.props.datos.medicamentos && <h1>medicamentos</h1>}
            {this.props.datos.medicamentosArray.map((item, index) => {
              return (
                <ModalInput
                  type="checkbox"
                  nombre={item.nombre}
                  key={index}
                  dataKey={index}
                  color={item.color}
                  onChange={this.handleChange}
                />
              );
            })}
            <input type="submit" />{" "}
            {/* Cuando haga el submit, debo poner en false la visibilidad del modal */}
          </form>
        </section>
      </React.Fragment>
    );
  }
}
export default Modal;
