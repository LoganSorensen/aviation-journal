import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";
import Article from "./components/article";
import AddArticle from "./components/addArticle";
import ContactForm from "./components/contactForm";
import Inbox from "./components/inbox";

import PrivateRoute from "./components/PrivateRoute";

import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/contact" component={ContactForm} />
        <Route exact path="/search" />
        <PrivateRoute exact path="/inbox" component={Inbox} />
        <PrivateRoute exact path="/add-article" component={AddArticle} />
        <Route exact path="/article/:id">
          <Article />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
