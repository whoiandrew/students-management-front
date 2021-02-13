import React from "react";
import AuthForm from "./components/authForm/AuthForm";
import Books from "./components/books/Books";
import Main from "./components/main/Main";
import Schedule from "./components/schedule/Schedule";
import NavBar from "./components/main/NavBar";
import Register from "./components/register/Register";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isLogged = useSelector((state) => state.login.isLogged);

  return (
    <>
      <Router>
        {isLogged && <NavBar />}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (isLogged ? <Main /> : <Redirect to="/login" />)}
          />
          <Route path="/login" render={() => <AuthForm />} />
          <Route
            exact
            path="/books"
            render={() => (isLogged ? <Books /> : <Redirect to="/login" />)}
          />
          <Route path="/schedule" render={() => <Schedule />} />
          <Route path="/register" render={() => <Register />} />
          <Route path="*" render={() => <div>404 NOT FOUND</div>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
