import React from "react";
import "./index.css";

class LiHistorial extends React.Component {
  render() {
    const {
      fechaAdaptada,
      medicamentosArray,
      medicionGleucemia,
      medicionPresion,
    } = this.props.item;
    return (
      <li className="historial__li">
        <span className="historial__li__date">{fechaAdaptada}</span>
        <h3 className="historial__li__medicion">{medicionGleucemia}</h3>
        <h4 className="historial__li__medicion">{medicionPresion}</h4>
        <div className="historial__li__medicamentos-container">
          {medicamentosArray.map((item, index) => {
            return (
              <span
                className="historial__li__medicamento"
                style={{ background: item.color }}
              ></span>
            );
          })}
        </div>
      </li>
    );
  }
}
export default LiHistorial;
