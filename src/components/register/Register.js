import React from "react";
import { useSelector, useDispatch } from "react-redux";
import sendForm from "./sendRegForm";

const Register = () => {
  const url = "http://127.0.0.1:8080/register";

  const { username, password, confirmPassword } = useSelector(
    (state) => state.register
  );
  const dispatch = useDispatch();

  const reqParams = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  };

  const isPasswordsSame = (pwd1, pwd2) => pwd1 && pwd1 === pwd2;
  console.log(isPasswordsSame(password, confirmPassword));

  const handleClick = (e) => {
    e.preventDefault();

    if (isPasswordsSame(password, confirmPassword)) {
      console.log("confirmed");
      dispatch({ type: "RESET" });
      sendForm(url, reqParams);
    } else {
      console.log("pwds dont matches");
    }
  };

  return (
    <div className="container">
      <form className="form">
        <div className="inputField">
          <label className="label" htmlFor="username">
            Name:
          </label>
          <input
            className="input"
            value={username}
            onChange={(e) => {
              dispatch({ type: "REG_USERNAME", value: e.target.value });
            }}
          />
        </div>
        <div className="inputField">
          <label className="label" htmlFor="password">
            Password:
          </label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => {
              dispatch({ type: "REG_PASSWORD", value: e.target.value });
            }}
          />
        </div>
        <div className="inputField">
          <label className="label" htmlFor="confirmPassword">
            Password again:
          </label>
          <input
            className="input"
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              dispatch({ type: "REG_CONFIRM_PASSWORD", value: e.target.value });
            }}
          />
        </div>
        <button className="submit-button" onClick={handleClick}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
