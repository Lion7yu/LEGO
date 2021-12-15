import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";
import Button from "./components/Button";

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/lego">LEGO</Link>
            </li>
            <li>
              <Link to="/user">个人主页</Link>
            </li>
            <li>
              <Link to="/export">导出页面</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/lego">
            <Lego />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/export">
            <Export />
          </Route>
          <Redirect exact from="/" to="/lego" />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Export() {
  return <h2>Export</h2>;
}

function Lego() {
  return <h2>LEGO</h2>;
}

function User() {
  return <h2>User</h2>;
}

function NoMatch() {
  return <h1>404 Not found</h1>;
}

export default App;
