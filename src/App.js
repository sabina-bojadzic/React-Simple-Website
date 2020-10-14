import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import Nav from "./Nav";
import Main from "./Main";
import About from "./About";
import Message from "./Message";
import Calend from "./Calend";

export default function App() {
  return (
    <div className="App">
      <Nav sticky="top" />

      <Menu />
      <div className="part">
        <Switch className="part">
          <Route path="/main" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/message" component={Message} />
          <Route path="/calendar" component={Calend} exact />
        </Switch>
      </div>
    </div>
  );
}
