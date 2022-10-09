import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, {Component} from "react";
import Home from "./components/home";
import Nav from "./components/nav";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path = "/"           element = {<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
