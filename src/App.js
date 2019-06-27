import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
// import AllParts from "./components/AllParts";
// import FavoriteParts from "./components/FavoriteParts";
// import AddPart from "./components/AddPart";

// import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
}

export default App;
