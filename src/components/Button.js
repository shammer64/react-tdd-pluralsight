import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    return (
      <button className="location-button" onClick={this.props.handleClick}>
        {this.props.location}
      </button>
    );
  }
}

export default Button;
