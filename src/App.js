import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";
import Article from "./components/article";
import AddArticle from "./components/addArticle";
import PrivateRoute from "./components/PrivateRoute";

import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/contact" />
      <Route exact path="/search" />
      <Route exact path="/inbox" />
      <PrivateRoute exact path="/add-article" component={AddArticle} />
      <Route exact path="/article/:id">
        <Article />
      </Route>
    </div>
  );
}

export default App;
