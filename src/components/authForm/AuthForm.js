import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sendForm from "./sendAuthForm";
import Loading from "./Loading";
import { Redirect } from "react-router-dom";

const AuthForm = () => {
  const { username, password } = useSelector((state) => state.auth);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  const url = "http://127.0.0.1:8080";
  const [loading, setLoading] = useState(false);

  const form = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  };

  return (
    <>
      {isLogged && <Redirect to="/" />}
      <div>{loading && <Loading />}</div>
      <div>{isLogged && <div>Logged IN</div>}</div>
      <form>
        <label htmlFor="username">Name</label>
        <input
          value={username}
          onChange={(e) => {
            dispatch({ type: "USERNAME", value: e.target.value });
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => {
            dispatch({ type: "PASSWORD", value: e.target.value });
          }}
        />
        <button
          onClick={(e) => {
            sendForm(e, dispatch, url + "/login", form, setLoading);
          }}
        >
          Button
        </button>
      </form>
    </>
  );
};

export default AuthForm;
