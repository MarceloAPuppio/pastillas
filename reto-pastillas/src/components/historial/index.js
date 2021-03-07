import React from "react";
import "./index.css";
import Modal from "../modal/index";
import LiHistorial from "../li-historial/index";
class Historial extends React.Component {
  state = {
    isModalVisible: false,
    liHistorial: JSON.parse(localStorage.getItem("user")),
  };
  handleClick = () => {
    alert("ouch");
    this.setState({ ...this.state, isModalVisible: true });
  };
  handleSubmitModal = (e, object) => {
    e.preventDefault();
    this.props.onSubmit(e, object);
    this.setState({
      isModalVisible: false,
      liHistorial: JSON.parse(localStorage.getItem("user")),
    });
    //===============================================
    //  Hasta acá todo bieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeen, ahora tengo que meter esto en el state, poner
    // el modalvisible en false y hacer magia con el evento click para concatenar el historial
  };
  render() {
    let user = this.props.user;
    // desestructuro liHistorial
    const historial = this.state.liHistorial.history;
    console.log(this.props.user.medicamentosArray);
    return (
      (this.state.isModalVisible && (
        <Modal datos={this.props.user} onSubmitModal={this.handleSubmitModal} />
      )) || (
        <React.Fragment>
          <section className="section-historial">
            <h2>Historial de {user.name}</h2>
            <ul className="historial__ul">
              {historial.map((item, index) => {
                return <LiHistorial item={item} />;
              })}
            </ul>
            <button className="historial__button" onClick={this.handleClick}>
              +
            </button>
          </section>
        </React.Fragment>
      )
    );
  }
}
export default Historial;
