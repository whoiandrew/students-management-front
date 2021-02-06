import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <nav>
        <Link to="/books" children="Books Page" />
      </nav>
    </>
  );
};

export default Main;
