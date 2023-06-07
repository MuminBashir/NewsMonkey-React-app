import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 12;
  apiKey = process.env.REACT_APP_NEWS_API;

  constructor() {
    super();
    this.state = { progress: 0, darkMode: false };
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  setDarkMode = () => {
    this.setState({ darkMode: this.state.darkMode ? false : true });

    !this.state.darkMode
      ? (document.body.style.backgroundColor = "#121212")
      : (document.body.style.backgroundColor = "white");
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Navbar
            darkMode={this.state.darkMode}
            setDarkMode={this.setDarkMode}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  darkMode={this.state.darkMode}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
                  darkMode={this.state.darkMode}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
                  darkMode={this.state.darkMode}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
                  darkMode={this.state.darkMode}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
                  darkMode={this.state.darkMode}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
                  darkMode={this.state.darkMode}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
                  darkMode={this.state.darkMode}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
