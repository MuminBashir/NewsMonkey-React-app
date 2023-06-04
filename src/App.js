import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {BrowserRouter, Routes, Route} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<News/>}/>
        <Route exact path="/Business" element={<News key="business" category="business"/>}/>
        <Route exact path="/Entertainment" element={<News key="entertainment" category="entertainment"/>}/>
        <Route exact path="/Health" element={<News key="health" category="health"/>}/>
        <Route exact path="/Science" element={<News key="science" category="science"/>}/>
        <Route exact path="/Sports" element={<News key="sports" category="sports"/>}/>
        <Route exact path="/Technology" element={<News key="technology" category="technology"/>}/>
        </Routes>
        </BrowserRouter>
      </>
    );
  }
}
