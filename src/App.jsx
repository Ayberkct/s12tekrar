import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Login from "./pages/Login";
import Feed from "./pages/fEED.JSX";

function App() {
  return (
    <>
      <Switch>
        <Route>
          <Login path='/login' />
        </Route>
        <Route>
          <Feed path='/feed' />
        </Route>
      </Switch>
    </>
  );
}

export default App;
