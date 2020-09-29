import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/header";

import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" />
      <Route exact path="/login" />
      <Route exact path="/contact" />
      <Route exact path="/search" />
      <Route exact path="/article/:id" />
      <Route exact path="/inbox" />
    </div>
  );
}

export default App;
