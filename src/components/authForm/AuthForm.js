import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sendForm from "./sendAuthForm";
import Loader from "react-loader-spinner";
import { Redirect } from "react-router-dom";
import "../../index.css";
import Error from "./Error";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { isFormValid } from "./formValidator";
import { URL, PORT_AUTH } from "../../constants";

const AuthForm = () => {
  console.log("reload");
  const { username, password } = useSelector((state) => state.auth);
  const isLogged = useSelector((state) => state.login.isLogged);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const url = URL + PORT_AUTH;
  const form = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (isFormValid(username, password)) {
      sendForm(dispatch, url + "/login", form, setLoading, setErrorMessage);
    } else {
      setErrorMessage("Input is not correct");
    }
  };

  return (
    <div className="container">
      {isLogged && <Redirect to="/" />}
      <form className="form">
        <div className="inputField">
          <label className="label" htmlFor="username">
            Name:
          </label>
          <input
            className="input"
            value={username}
            onChange={(e) => {
              dispatch({ type: "USERNAME", value: e.target.value });
            }}
          />
        </div>
        <div className="inputField">
          <label className="label" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => {
              dispatch({ type: "PASSWORD", value: e.target.value });
            }}
          />
        </div>
        <button
          className="submit-button"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Login
        </button>
        <div className="error">
          <span>{errorMessage && <Error errorMessage={errorMessage} />}</span>
        </div>
      </form>
      <div className="loader">
        {loading && (
          <Loader
            type="Puff"
            color="rgba(96, 96, 96, 0.4)"
            height={40}
            width={40}
          />
        )}
      </div>
    </div>
  );
};

export default AuthForm;
