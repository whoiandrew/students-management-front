import { Link } from "react-router-dom";
import "../../index.css";

const NavBar = () => {
  return (
    <>
      <nav className="nav-bar">
        <ul className="nav-list">
          <Link className="nav-link" to="/" children="Home Page" />
          <Link className="nav-link" to="/books" children="Books Page" />
          <Link className="nav-link" to="/schedule" children="Schedule Page" />
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
