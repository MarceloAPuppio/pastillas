import React from "react";
import "./index.css";

class CheckItem extends React.Component {
  //   state = {
  //     isCheked: true,
  //   };
  //   handleChange = (e) => {
  //     console.log(e.target.checked);
  //     this.setState({
  //       isCheked: e.target.checked,
  //     });
  //   };
  render() {
    return (
      <React.Fragment>
        <div className="check-container">
          <span className="rotulo">{this.props.name}</span>
          <label className="switch">
            <input
              type="checkbox"
              name={this.props.name}
              id={this.props.name}
              onChange={this.props.onChange}
              // checked={this.state.isCheked}
            />
            <span className="slider"></span>
          </label>
        </div>
      </React.Fragment>
    );
  }
}

export default CheckItem;
