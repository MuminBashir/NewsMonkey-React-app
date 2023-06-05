import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 12;

  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<News key="general" pageSize={this.pageSize} />}
            />
            <Route
              exact
              path="/Business"
              element={
                <News
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
                <News key="health" category="health" pageSize={this.pageSize} />
              }
            />
            <Route
              exact
              path="/Science"
              element={
                <News
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
                <News key="sports" category="sports" pageSize={this.pageSize} />
              }
            />
            <Route
              exact
              path="/Technology"
              element={
                <News
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
