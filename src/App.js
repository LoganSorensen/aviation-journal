import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/header";
import Login from "./components/login";
import Article from "./components/article"

import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" />
      <Route exact path="/login" component={Login} />
      <Route exact path="/contact" />
      <Route exact path="/search" />
      <Route exact path="/inbox" />
      <Route exact path="/article/:id">
        <Article />
        </Route>
    </div>
  );
}

export default App;
