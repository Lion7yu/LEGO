import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import NoMatch from "views/NoMatch";
import Lego from "views/Lego";
import User from "views/User";
import Export from "views/Export";

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
export default App;
