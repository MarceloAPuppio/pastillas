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
    let fechaArray = fechaAdaptada.split("-");
    return (
      <li className="historial__li">
        <div className="historial__li__date">
          <span className="date-day">{fechaArray[0]}</span>
          <span className="date-month">{fechaArray[1]}</span>
          <span className="date-year">{fechaArray[2]}</span>
        </div>
        <h3 className="historial__li__medicion-gleucemia">
          {medicionGleucemia}
        </h3>
        <h4 className="historial__li__medicion-presion">{medicionPresion}</h4>
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
