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
        <h2>{fechaAdaptada}</h2>
        {medicamentosArray.map((item, index) => {
          return <h2>{item.color}</h2>;
        })}
        <h3>{medicionGleucemia}</h3>
        <h4>{medicionPresion}</h4>
      </li>
    );
  }
}
export default LiHistorial;
