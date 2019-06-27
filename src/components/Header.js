import React, { Component } from "react";


class Header extends Component {
  constructor() {
    super();

    this.state = {
      view: "AllParts"
    };
  }

  

  render() {
    return (
      <div>
        Header
        <button onClick={() => this.props.handleChangeView("AllParts")}>
          all parts
        </button>
        <button onClick={() => this.props.handleChangeView("FavoriteParts")}>
          favorite parts
        </button>
        <button onClick={() => this.props.handleChangeView("AddParts")}>
          add part
        </button>
      </div>
    );
  }
}

export default Header;
