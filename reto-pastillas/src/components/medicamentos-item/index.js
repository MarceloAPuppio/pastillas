import React from "react";
class MedicamentosItem extends React.Component {
  render() {
    return (
      <li>
        <input type="text" placeholder="Medicamento" />
        <input type="color" onChange={this.props.onChange} />
      </li>
    );
  }
}
export default MedicamentosItem;
