import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  name = "mumin";
  render() {
    return (
      <>
        <Navbar />
        <News />
      </>
    );
  }
}
