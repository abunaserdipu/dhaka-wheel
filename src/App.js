import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Destination from "./Components/Destination/Destination";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <PrivateRoute path="/destination/:transportId">
          <Destination/>
        </PrivateRoute>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
