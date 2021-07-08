import { Link } from "react-router-dom";
import "../../index.css";

const NavBar = () => {
  const { role } = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      {role==="admin" || <nav className="nav-bar">
        <ul className="nav-list">
          <Link className="nav-link" to="/" children="Home Page" />
          <Link className="nav-link" to="/works" children="Lessons" />
          {role === "student" && (
            <Link className="nav-link" to="/sentWorks" children="My Wroks" />
          )}
          <Link className="nav-link" to="/schedule" children="Schedule Page" />
          <Link className="nav-link" to="/pinboard" children="Pinboard" />
        </ul>
      </nav>}
    </>
  );
};

export default NavBar;
