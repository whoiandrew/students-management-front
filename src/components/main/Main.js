import { useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const username = localStorage.getItem("username");

  return (
    <>
      <h2>Welcome, {username}!</h2>
      <hr />
      <button onClick={() => {dispatch({ type: "LOG_OUT" })}}>Logout</button>
    </>
  );
};

export default Main;
