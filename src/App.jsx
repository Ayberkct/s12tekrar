import "./App.css";

import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./pages/Login";
import Feed from "./pages/Feed";

function App() {
  return (
    <>
      {" "}
      <Switch>
        <Route>
          <Login exact path='/login' />
        </Route>
        <Route>
          <Feed path='/feed' />
        </Route>
      </Switch>
    </>
  );
}

export default App;
