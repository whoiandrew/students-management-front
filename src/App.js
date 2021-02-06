import React, { useEffect } from "react";
import "./App.css";
import AuthForm from "./components/authForm/AuthForm";
import Books from "./components/books/Books";
import Main from "./components/authForm/main/Main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

const URL = "http://127.0.0.1:8080";

export const MainContext = React.createContext();

function App() {
  const isLogged = useSelector((state) => state.isLogged);
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (isLogged ? <Main /> : <Redirect to="/login" />)}
        />
        <Route
          path="/login"
          render={() => (
            <MainContext.Provider value={{ url: URL }}>
              <AuthForm />
            </MainContext.Provider>
          )}
        />
        <Route
          exact
          path="/books"
          render={() => (isLogged ? <Books /> : <Redirect to="/login" />)}
        />
        <Route path="*" render={() => <div>404 NOT FOUND</div>} />
      </Switch>
    </Router>
  );
}

export default App;
