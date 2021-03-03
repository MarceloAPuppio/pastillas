import React from "react";
import Tracking from "../components/tracking/index";
import Medicamentos from "../components/medicamentos/index";

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
    console.log(e.target.type);
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      },
    });
  };
  handleChangeItem = (e) => {
    let medicamentosArray = [...this.state.user.medicamentosArray];
    medicamentosArray[e.target.getAttribute("data-key")] = {
      ...medicamentosArray[e.target.getAttribute("data-key")],
      [e.target.name]: e.target.value,
    };
    this.setState({
      user: {
        medicamentosArray,
      },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isSubmited: true,
      user: {
        ...this.state.user,
        medicamentosArray: Array(
          parseInt(this.state.user.cantidadMedicamentos)
        ).fill({ nombre: "", color: "", ingerido: null }),
      },
    });
  };
  componentWillMount = (props) => {
    // let usuario = {
    //   name: "Marcelo",
    //   gleucemia: true,
    //   presion: false,
    //   medicamentos: [],
    // };
    // localStorage.setItem("user", JSON.stringify(usuario));
    if (localStorage.getItem("user")) {
      let objeto = JSON.parse(localStorage.getItem("user"));
      this.setState({ user: objeto, hasUser: true });
    }
  };
  render() {
    return (
      <React.Fragment>
        {(this.state.isSubmited && (
          <Medicamentos
            medicamentosArray={this.state.user.medicamentosArray}
            onChangeItem={this.handleChangeItem}
          />
        )) ||
          (this.state.hasUser && <h1>{this.state.user.name}</h1>) || (
            <Tracking
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              medicamentos={this.state.user.medicamentos}
            />
          )}
      </React.Fragment>
    );
  }
}
export default PageHome;
