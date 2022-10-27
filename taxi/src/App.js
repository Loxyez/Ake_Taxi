import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, {Component} from "react";
import Nav from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Service from "./components/services";
import Price from "./components/price";
import Contact from "./components/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/"           element = {<Home />}></Route>
        <Route path = "/about"      element = {<About />}></Route>
        <Route path = "/services"   element = {<Service />}></Route>
        <Route path = "/price"      element = {<Price />}></Route>
        <Route path = "/contact"    element = {<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
