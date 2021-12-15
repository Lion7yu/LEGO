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
