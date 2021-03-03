import React from "react";
import CheckItem from "../check-item/index";
import "./index.css";

class Tracking extends React.Component {
  render() {
    return (
      <section id="trackeo">
        <form
          action="#"
          onSubmit={this.props.onSubmit}
          className="form_tracking"
        >
          <input
            type="text"
            name="name"
            placeholder="Ingresá tu nombre"
            className="form_inputText"
            onChange={this.props.onChange}
            required
          />
          <h2>Trackeo</h2>
          <CheckItem name="presion" onChange={this.props.onChange} />
          <CheckItem name="gleucemia" onChange={this.props.onChange} />
          <CheckItem name="medicamentos" onChange={this.props.onChange} />
          {this.props.medicamentos ? (
            <React.Fragment>
              <h4>Cuántos</h4>
              <input
                type="number"
                min="1"
                max="10"
                required
                name="cantidadMedicamentos"
                onChange={this.props.onChange}
              />
            </React.Fragment>
          ) : (
            ""
          )}
          <input type="submit" value="Siguiente" />
          {/* <input type="reset" value="Limpiar" />  Tengo que resolver tema que no vuelve valores a false....*/}
        </form>
      </section>
    );
  }
}
export default Tracking;
