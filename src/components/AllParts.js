import React, { Component } from "react";
import Part from "./Part";

class AllParts extends Component {
  constructor() {
    super();

    this.state = {
      allParts: []
    };
  }

  render() {
    return (
      <div>
        {this.props.parts.length ? (
          this.props.parts.map(part => {
            return (
              <div>
                <Part part={part} />
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default AllParts;
