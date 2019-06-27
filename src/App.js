import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import AllParts from "./components/AllParts";
import FavoriteParts from "./components/FavoriteParts";
import AddPart from "./components/AddPart";

// import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      view: "AllParts"
    };
    this.handleChangeView = this.handleChangeView.bind(this);
  }

//componentDidMount make axios request for all parts, set it to state. Pass down list of all parts to all parts component.

  handleChangeView(view) {
    this.setState({
      view: view
    });
  }

  render() {
    return (
      <div className="App">
        <Header handleChangeView={this.handleChangeView} />
        {this.state.view === "AllParts" ? (
          <AllParts />
        ) : this.state.view === "FavoriteParts" ? (
          <FavoriteParts />
        ) : (
          <AddPart />
        )}
      </div>
    );
  }
}

export default App;
