import React, { Component } from "react";

class Part extends Component {
  render() {
    return (
      <div>
        <div>{this.props.part.name}</div>
        <div>{this.props.part.type}</div>
        <div>{this.props.part.make}</div>
      </div>
    );
  }
}

export default Part;
