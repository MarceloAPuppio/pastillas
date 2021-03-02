import React from "react";
import MedicamentosItem from "../medicamentos-item/index";
class Medicamentos extends React.Component {
  handleChange = (e) => {
    console.log(e.target.value);
  };
  render() {
    return (
      <form action="#">
        <ul>
          <MedicamentosItem onChange={this.handleChange} />
          <MedicamentosItem onChange={this.handleChange} />
          <MedicamentosItem onChange={this.handleChange} />
          <MedicamentosItem onChange={this.handleChange} />
        </ul>
        <input type="submit" />
      </form>
    );
  }
}
export default Medicamentos;
