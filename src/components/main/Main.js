import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../../index.css";

const Main = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <h2>
        Welcome, {user.firstname} {user.lastname}!
      </h2>
      <p>Your role is {user.role}</p>
      <hr />
      {user.role === "admin" && (
        <Link style={{textDecoration: "none", textAlign: "center", paddingTop: "15px"}} className="submit-button" to="/admin" children="Admin Panel" />
      )}
      <button
        className="submit-button"
        onClick={() => {
          dispatch({ type: "LOG_OUT" });
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Main;
