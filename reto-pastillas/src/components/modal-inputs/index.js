import React from "react";
import "./index.css";
let InputText = (props) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      required
      onChange={props.onChange}
      name={props.name}
    />
  );
};
let InputCheck = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <div className="input-checkbox-container" style={{ color: props.color }}>
        <label className="modal-switch">
          {/* {props.nombre}{" "} */}
          <input
            className="inputModal"
            type="checkbox"
            onChange={props.onChange}
            data-key={props.dataKey}
            id={props.dataKey}
          />
          <span className="sliderModal"></span>
        </label>
      </div>
    </React.Fragment>
  );
};

class ModalInput extends React.Component {
  render() {
    switch (this.props.type) {
      case "text":
        return (
          <InputText
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
            name={this.props.name}
          />
        );
      case "checkbox":
        return (
          <InputCheck
            nombre={this.props.nombre}
            color={this.props.color}
            onChange={this.props.onChange}
            dataKey={this.props.dataKey}
          />
        );
      default:
        break;
    }
  }
}
export default ModalInput;
