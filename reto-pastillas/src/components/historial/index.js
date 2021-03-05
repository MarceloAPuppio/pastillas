import React from "react";
import Modal from "../modal/index";
class Historial extends React.Component {
  state = {
    isModalVisible: true,
  };

  handleSubmitModal = (e, object) => {
    e.preventDefault();
    console.log(object);
    //===============================================
    //  Hasta acá todo bieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeen, ahora tengo que meter esto en el state, poner
    // el modalvisible en false y hacer magia con el evento click para concatenar el historial
  };
  render() {
    let user = this.props.user;
    console.log(this.props.user.medicamentosArray);
    return (
      (this.state.isModalVisible && (
        <Modal datos={this.props.user} onSubmitModal={this.handleSubmitModal} />
      )) || (
        <React.Fragment>
          <h1>Historial de {user.name}</h1>
          {this.props.user.medicamentosArray.map((item, index) => {
            return <h1>Medicamento {item.nombre}</h1>;
          })}
          <button>Add</button>
        </React.Fragment>
      )
    );
  }
}
export default Historial;
