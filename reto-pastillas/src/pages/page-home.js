import React from "react";
import Tracking from "../components/tracking/index";

class PageHome extends React.Component {
  state = {
    hasUser: false,
    user: {
      name: "",
      gleucemia: null,
      presion: null,
      medicamentos: null,
      medicamentosArray: [],
    },
  };
  handleChange = (e) => {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.checked },
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
        {(this.state.hasUser && <h1>{this.state.user.name}</h1>) || (
          <Tracking
            onChange={this.handleChange}
            medicamentos={this.state.user.medicamentos}
          />
        )}
      </React.Fragment>
    );
  }
}
export default PageHome;
