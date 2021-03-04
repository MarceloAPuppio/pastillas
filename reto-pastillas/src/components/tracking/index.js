import React from "react";
import CheckItem from "../check-item/index";
import "./index.css";
import Medicamentos from "../medicamentos/index";

class Tracking extends React.Component {
  render() {
    console.log(this.props);
    return (
      (this.props.medicamentos && this.props.isSubmited && (
        <Medicamentos
          medicamentosArray={this.props.medicamentosArray}
          onChange={this.props.onChangeItem}
          onSubmit={this.props.onSubmitMedicamentos}
        />
      )) || (
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
                <div className="inputNumberContainer">
                  <label>Cantidad</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    required
                    name="cantidadMedicamentos"
                    onChange={this.props.onChange}
                    className="input--number"
                  />
                </div>
              </React.Fragment>
            ) : (
              ""
            )}
            <input type="submit" value="⏩" className="trackeo__btn" />
            {/* <input type="reset" value="Limpiasdsdr" />  Tengo que resolver tema que no vuelve valores a false....*/}
          </form>
        </section>
      )
    );
  }
}
export default Tracking;
