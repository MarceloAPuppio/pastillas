import React from "react";
import "./index.css";
class MedicamentosItem extends React.Component {
  render() {
    return (
      <li className="li__medicamentosItem">
        <input
          type="text"
          name="nombre"
          placeholder="Medicamento"
          data-key={this.props.dataKey}
          onChange={this.props.onChange}
          className="li__medicamentosItem__text"
          required
        />
        <input
          type="color"
          name="color"
          onChange={this.props.onChange}
          data-key={this.props.dataKey}
          className="li__medicamentosItem__color"
          required
        />
      </li>
    );
  }
}
export default MedicamentosItem;
