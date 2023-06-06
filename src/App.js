import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 12;

  constructor() {
    super();
    this.state = { progress: 0 };
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              exact
              path="/Business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  category="business"
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  category="entertainment"
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  category="health"
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              exact
              path="/Science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  category="science"
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              exact
              path="/Sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  category="sports"
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              exact
              path="/Technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  category="technology"
                  pageSize={this.pageSize}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
