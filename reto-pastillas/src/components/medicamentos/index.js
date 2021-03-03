import React from "react";
import "./index.css";

import MedicamentosItem from "../medicamentos-item/index";
class Medicamentos extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form action="#" className="form_medicamentos">
          <h2>Ingresa tus medicamentos</h2>
          <h3>( y asignales un color 🎨 )</h3>
          <ul>
            {this.props.medicamentosArray.map((item, index) => {
              return (
                <MedicamentosItem
                  key={index}
                  dataKey={index}
                  onChange={this.props.onChangeItem}
                />
              );
            })}
          </ul>
          <input type="submit" value="Finalizar" />
          {/*=====================================================================
        
         Cuando hago click en finalizar, recien ahi debería hacer el setIten()
         y poner el submit del state, en falso, para reiniciar el componente
        ========================================================================
         */}
        </form>
      </React.Fragment>
    );
  }
}
export default Medicamentos;
