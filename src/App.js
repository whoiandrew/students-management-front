import React from "react";
import AuthForm from "./components/authForm/AuthForm";
import Main from "./components/main/Main";
import Schedule from "./components/schedule/Schedule";
import NavBar from "./components/main/NavBar";
import Works from "./components/works/Works";
import Register from "./components/register/Register";
import Work from "./components/works/Work";
import SentWorks from "./components/sentWorks/SentWorks";
import Pinboard from "./components/pinboard/Pinboard";

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
          <Route exact path="/schedule" render={() => <Schedule />} />
          <Route exact path="/works/:lesson_name" render={() => <Work />} />
          <Route exact path="/works" render={() => <Works />} />
          <Route exact path="/sentWorks" render={() => <SentWorks />} />
          <Route exact path="/register" render={() => <Register />} />
          <Route exact path="/pinboard" render={() => <Pinboard />} />
          <Route exact path="*" render={() => <div>404 NOT FOUND</div>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
