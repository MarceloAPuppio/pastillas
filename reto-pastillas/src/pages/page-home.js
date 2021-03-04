import React from "react";
import Tracking from "../components/tracking/index";

class PageHome extends React.Component {
  state = {
    hasUser: false,
    isSubmited: false,
    user: {
      name: "",
      gleucemia: null,
      presion: null,
      medicamentos: null,
      medicamentosArray: [{ nombre: "", color: "#000", ingerido: null }],
    },
  };
  handleChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      },
    });
  };
  handleChangeItem = (e) => {
    console.log("me toma el change...");
    let medicamentosArray = [...this.state.user.medicamentosArray];
    medicamentosArray[e.target.getAttribute("data-key")] = {
      ...medicamentosArray[e.target.getAttribute("data-key")],
      [e.target.name]: e.target.value,
    };
    this.setState({
      user: { ...this.state.user, medicamentosArray },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.user.medicamentos) {
      this.setState({
        isSubmited: true,
        user: {
          ...this.state.user,
          medicamentosArray: Array(
            parseInt(this.state.user.cantidadMedicamentos)
          ).fill({ nombre: "", color: "", ingerido: null }),
          // medicamentos: true,
        },
      });
    } else {
      alert("Listo, no tenés medicamentos :O");
      this.setState({
        isSubmited: true,
        hasUser: true,
      });
      let user = { ...this.state.user, medicamentosArray: [] };
      localStorage.setItem("user", JSON.stringify(user));
    }
  };
  handleSubmitMedicamentos = (e) => {
    e.preventDefault();
    this.setState({
      isSubmited: true,
      hasUser: true,
    });
    let user = { ...this.state.user };
    localStorage.setItem("user", JSON.stringify(user));
  };
  componentWillMount = (props) => {
    if (localStorage.getItem("user")) {
      let objeto = JSON.parse(localStorage.getItem("user"));
      this.setState({ user: objeto, hasUser: true });
    }
  };
  render() {
    return (
      <React.Fragment>
        {/*Si hay usuario en localStorage, hago un render de la planilla de carga*/}
        {(this.state.hasUser && <h1>{this.state.user.name}</h1>) || (
          /*Aquí hago el renderizado de la pantatalla de trackeo, siempre y cuando no haya un usuario en memoria*/
          <Tracking
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            medicamentos={this.state.user.medicamentos}
            isSubmited={this.state.isSubmited}
            medicamentosArray={this.state.user.medicamentosArray}
            onChangeItem={this.handleChangeItem}
            onSubmitMedicamentos={this.handleSubmitMedicamentos}
          />
        )}
      </React.Fragment>
    );
  }
}
export default PageHome;
