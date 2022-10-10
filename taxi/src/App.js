import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, {Component} from "react";
import Home from "./components/home";
import About from "./components/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/"           element = {<Home />}></Route>
        <Route path = "/about"      element = {<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
