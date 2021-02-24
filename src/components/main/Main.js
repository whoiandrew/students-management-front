import { useDispatch } from "react-redux";
import "../../index.css";

const Main = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <h2>
        Welcome, {user.firstname} {user.lastname}!
      </h2>
      <hr />
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
